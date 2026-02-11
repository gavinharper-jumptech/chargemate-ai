import { useState, useCallback } from "react";
import { toast } from "@/hooks/use-toast";
import { useChatConfig } from "@/context/ChatConfigContext";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
}

// Generate a unique session ID for conversation memory
const generateSessionId = (): string => {
  const stored = sessionStorage.getItem("n8n-session-id");
  if (stored) return stored;

  const newId = `session-${crypto.randomUUID()}`;
  sessionStorage.setItem("n8n-session-id", newId);
  return newId;
};

const isValidWebhookUrl = (url: string): boolean => {
  try {
    const parsed = new URL(url);
    if (parsed.protocol !== 'https:') return false;
    const hostname = parsed.hostname;
    if (/^(10|127|172\.(1[6-9]|2[0-9]|3[01])|192\.168)\./.test(hostname)) return false;
    if (hostname === 'localhost' || hostname === '0.0.0.0') return false;
    return true;
  } catch { return false; }
};

export const useN8nChat = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState(generateSessionId);
  const { webhookUrl, metadata } = useChatConfig();

  const sendMessage = useCallback(
    async (content: string) => {
      if (!content.trim()) return;

      if (!webhookUrl) {
        toast({
          title: "No webhook URL configured",
          description: "Please provide a webhookUrl in your createChat() options.",
          variant: "destructive",
        });
        return;
      }

      if (!isValidWebhookUrl(webhookUrl)) {
        toast({
          title: "Invalid webhook URL",
          description: "The webhook URL must use HTTPS and point to a valid external server.",
          variant: "destructive",
        });
        return;
      }

      // Add user message immediately
      const userMessage: ChatMessage = {
        id: `user-${Date.now()}`,
        role: "user",
        content: content.trim(),
      };

      setMessages((prev) => [...prev, userMessage]);
      setIsLoading(true);

      try {
        const response = await fetch(webhookUrl!, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            action: "sendMessage",
            message: content.trim(),
            sessionId,
            ...(metadata && { metadata }),
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
          // Handle arrays - extract from first element
          if (Array.isArray(value)) {
            if (value.length > 0) return extractString(value[0]);
            return "";
          }
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
        if (import.meta.env.DEV) {
          console.error("Webhook error:", error);
        }

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
    [sessionId, webhookUrl, metadata],
  );

  const clearMessages = useCallback(() => {
    setMessages([]);
    // Generate fresh session ID for new conversation
    const newId = `session-${crypto.randomUUID()}`;
    sessionStorage.setItem("n8n-session-id", newId);
    setSessionId(newId);
  }, []);

  return {
    messages,
    isLoading,
    sendMessage,
    clearMessages,
    sessionId,
  };
};
