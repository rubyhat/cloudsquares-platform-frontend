import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import react from "@vitejs/plugin-react-swc";
import { visualizer } from "rollup-plugin-visualizer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      include: "**/*.svg",
      svgrOptions: {
        icon: true,
      },
    }),
    visualizer({
      filename: "dist/stats.html",
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  server: {
    open: true,
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react") || id.includes("scheduler"))
              return "vendor-react";
            if (id.includes("leaflet") || id.includes("react-leaflet"))
              return "vendor-maps";
            if (
              id.includes("@mui") ||
              id.includes("@emotion") ||
              id.includes("clsx")
            )
              return "vendor-mui";
            if (id.includes("zustand")) return "vendor-zustand";
            if (id.includes("@tanstack/react-query"))
              return "vendor-react-query";
            if (id.includes("react-hook-form") || id.includes("@hookform"))
              return "vendor-hookform";
            if (id.includes("axios")) return "vendor-axios";
            if (id.includes("date-fns")) return "vendor-date";
            if (id.includes("react-icons")) return "vendor-icons";
          }
        },
      },
    },
  },
});
