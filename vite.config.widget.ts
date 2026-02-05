import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Widget build configuration - outputs ES module for CDN hosting
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      // Force single React instance
      react: path.resolve(__dirname, "./node_modules/react"),
      "react-dom": path.resolve(__dirname, "./node_modules/react-dom"),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/widget.tsx"),
      name: "EVChatWidget",
      fileName: () => "ev-chat.js",
      formats: ["es"], // ES module for modern import
    },
    rollupOptions: {
      // Don't externalize React - bundle it for standalone use
      output: {
        // CSS will be extracted to style.css
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "style.css") return "style.css";
          return assetInfo.name || "asset";
        },
      },
    },
    // Output to public/widget for direct serving from Lovable
    outDir: "public/widget",
    // Generate sourcemaps for debugging
    sourcemap: true,
  },
  // Define production mode for smaller bundle
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
});
