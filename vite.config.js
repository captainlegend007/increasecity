import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteCompression(),
    VitePWA({
      manifest: {
        name: "christreignministries",
        short_name: "christreignministries",
        start_url: "/",
        display: "standalone",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        lang: "en",
        scope: "/",
        icons: [
          {
            src: "/assets/church logo copy.c056ca46.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/assets/church logo copy.c056ca46.png",
            sizes: "144x144",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/assets/church logo copy.c056ca46.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
      mode: "development",
      registerType: "autoUpdate",
      injectRegister: "auto",
      devOptions: {
        enabled: true,
        type: "module",
      },
    }),
  ],
  base: "/increasecity",
});
