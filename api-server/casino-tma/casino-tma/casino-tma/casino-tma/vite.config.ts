import { defineConfig } from "vite";
import react from "@vitejs/react-refresh";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true
  },
  build: {
    outDir: "dist"
  }
});

