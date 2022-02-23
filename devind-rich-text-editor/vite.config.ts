import path from 'path'
import { createVuePlugin } from 'vite-plugin-vue2'
import { defineConfig } from 'vite'

export default defineConfig({
    plugins: [createVuePlugin()],
    build: {
        lib: {
            entry: path.resolve(__dirname, 'index.ts'),
            name: 'DevindRichTextEditor',
            fileName: (format => `devind-rich-text-editor.${format}.js`)
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
