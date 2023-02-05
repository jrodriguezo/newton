import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const aliasPrefix = '@'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // "@": path.resolve(__dirname, "./src/"),
      [`${aliasPrefix}components`]: `${path.resolve(__dirname, "./src/components/")}`,
      [`${aliasPrefix}constants`]: `${path.resolve(__dirname, "./src/constants/")}`,
      [`${aliasPrefix}hooks`]: path.resolve(__dirname, "./src/hooks"),
      [`${aliasPrefix}utils`]: `${path.resolve(__dirname, "./src/utils")}`,
      [`${aliasPrefix}assets`]: `${path.resolve(__dirname, "./src/assets")}`,
      [`${aliasPrefix}public`]: `${path.resolve(__dirname, "./public/")}`,
    },
  },
});
