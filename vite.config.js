import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// SPA: dev server falls back to index.html for client-side routes.
export default defineConfig({
  plugins: [react()],
});
