import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      "discriminatively-runniest-wendi.ngrok-free.dev",
      "frontendproject-three-ruddy.vercel.app", // ✅ your live Vercel domain
    ],
    proxy: {
      "/api": {
        target: "http://localhost:3000", // ✅ Local backend for dev only
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
