import path from 'path';
import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import WindiCSS from 'vite-plugin-windicss';
import Markdown from 'vite-plugin-md';

export default defineConfig({
  plugins: [
    Vue({ include: [ /\.vue$/, /\.md$/ ] }),
    WindiCSS(),
    Markdown()
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'MyLib'
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [ 'vue' ],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue'
        },
        exports: 'named'
      }
    }
  }
});
