/** @format */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/indigo-react/",
  resolve: {
    alias: {
      src: "/src",
    },
  },
  plugins: [react()],
});
