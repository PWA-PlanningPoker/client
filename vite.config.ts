import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@ui": path.resolve(__dirname, "src/ui"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@containers": path.resolve(__dirname, "src/containers"),
      "@components": path.resolve(__dirname, "src/components"),
    },
  },
  plugins: [vue()],
});
