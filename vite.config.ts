import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      // Force single React instance to fix @ai-sdk/react conflict
      react: path.resolve(__dirname, "./node_modules/react"),
      "react-dom": path.resolve(__dirname, "./node_modules/react-dom"),
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
  build: {
    // Widget build configuration (use: npm run build -- --config vite.config.ts --mode widget)
    ...(mode === "widget" && {
      lib: {
        entry: path.resolve(__dirname, "src/widget.tsx"),
        name: "EVChatWidget",
        fileName: () => "ev-chat-widget.js",
        formats: ["iife"],
      },
      rollupOptions: {
        output: {
          // Ensure CSS is inlined into the JS bundle for easy embedding
          assetFileNames: "ev-chat-widget[extname]",
        },
      },
    }),
  },
}));
