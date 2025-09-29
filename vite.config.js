// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "build", // Sesuaikan dengan folder output (default: dist)
  },
  base: "/", // Penting! Jangan ubah ke path lain kecuali deploy di subfolder
});
