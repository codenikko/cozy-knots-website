import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/",
  build: {
    assetsDir: 'assets',
    outDir: "dist",
    minify: "terser",
    sourcemap: false,
    terserOptions: {
      compress: {
        //drop_console: true,
        //drop_debugger: true,
      },
      format: {
        comments: false,
      },
      mangle: true,
    },
    emptyOutDir: true,
  },
});
