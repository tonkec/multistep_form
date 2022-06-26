import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  plugins: [
    createHtmlPlugin({
      entry: 'main.js',
      inject: {
        data: {
          metaTags: `
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title> Pure Scss multistep form </title>`,
        },
      },
    }),
  ],
});
