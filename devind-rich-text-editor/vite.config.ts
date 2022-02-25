import path from 'path'
import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import scriptSetup from 'unplugin-vue2-script-setup/vite'
import libCss from 'vite-plugin-libcss'

export default defineConfig({
  plugins: [createVuePlugin(), scriptSetup(), libCss()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'index.ts'),
      name: 'DevindRichTextEditor',
      fileName: format => `devind-rich-text-editor.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
