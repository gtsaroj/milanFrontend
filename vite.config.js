import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target:
          "http://ec2-13-202-12-148.ap-south-1.compute.amazonaws.com:8000/",
        changeOrigin: true,
      },
    },
  },
});
