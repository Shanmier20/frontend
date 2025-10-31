import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["discriminatively-runniest-wendi.ngrok-free.dev", "frontend-six-psi-68.vercel.app",] // ✅ your live Vercel domain],
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});

