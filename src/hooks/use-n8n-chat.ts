import { useState, useCallback } from "react";
import { toast } from "@/hooks/use-toast";

// Replace this with your n8n webhook URL
const N8N_WEBHOOK_URL = "https://jt-eco.app.n8n.cloud/webhook/1cd4ac0b-7a32-4c9f-9307-d0501ff02822";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
}

// Generate a unique session ID for conversation memory
const generateSessionId = (): string => {
  const stored = sessionStorage.getItem("n8n-session-id");
  if (stored) return stored;

  const newId = `session-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
  sessionStorage.setItem("n8n-session-id", newId);
  return newId;
};

export const useN8nChat = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId] = useState(generateSessionId);

  const sendMessage = useCallback(
    async (content: string) => {
      if (!content.trim()) return;

      // Add user message immediately
      const userMessage: ChatMessage = {
        id: `user-${Date.now()}`,
        role: "user",
        content: content.trim(),
      };

      setMessages((prev) => [...prev, userMessage]);
      setIsLoading(true);

      try {
        const response = await fetch(N8N_WEBHOOK_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: content.trim(),
            sessionId,
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Handle different response formats from n8n
        const data = await response.text();
        let assistantContent: string;

        // Helper to extract string from potentially nested response
        const extractString = (value: unknown): string => {
          if (typeof value === "string") return value;
          if (value === null || value === undefined) return "";
          if (typeof value === "object") {
            const obj = value as Record<string, unknown>;
            // Try common response keys recursively
            const content = obj.output || obj.response || obj.text || obj.message || obj.content;
            if (content) return extractString(content);
            // Fallback to JSON string
            return JSON.stringify(value);
          }
          return String(value);
        };

        try {
          // Try to parse as JSON first
          const jsonData = JSON.parse(data);
          assistantContent = extractString(jsonData);
        } catch {
          // If not JSON, use the raw text response
          assistantContent = data;
        }

        const assistantMessage: ChatMessage = {
          id: `assistant-${Date.now()}`,
          role: "assistant",
          content: assistantContent,
        };

        setMessages((prev) => [...prev, assistantMessage]);
      } catch (error) {
        console.error("n8n webhook error:", error);

        toast({
          title: "Connection failed",
          description: "Could not connect to the AI assistant. Please try again.",
          variant: "destructive",
        });

        // Add error message to chat
        const errorMessage: ChatMessage = {
          id: `error-${Date.now()}`,
          role: "assistant",
          content: "Sorry, I couldn't connect to the server. Please check your connection and try again.",
        };

        setMessages((prev) => [...prev, errorMessage]);
      } finally {
        setIsLoading(false);
      }
    },
    [sessionId],
  );

  const clearMessages = useCallback(() => {
    setMessages([]);
    sessionStorage.removeItem("n8n-session-id");
  }, []);

  return {
    messages,
    isLoading,
    sendMessage,
    clearMessages,
    sessionId,
  };
};
