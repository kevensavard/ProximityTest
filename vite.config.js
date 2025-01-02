import { defineConfig } from 'vite';
    import path from 'path';

    export default defineConfig({
      build: {
        rollupOptions: {
          input: {
            popup: path.resolve(__dirname, 'popup/index.html'),
            background: path.resolve(__dirname, 'background.js'),
          },
          output: {
            entryFileNames: '[name].js',
            dir: 'dist',
          },
        },
      },
    });
