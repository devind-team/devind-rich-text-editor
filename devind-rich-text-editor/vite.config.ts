import path from 'path'
import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import ScriptSetup from 'unplugin-vue2-script-setup/vite'

export default defineConfig({
    plugins: [
        createVuePlugin(),
        ScriptSetup()
    ],
    build: {
        lib: {
            entry: path.resolve(__dirname, 'index.ts'),
            name: 'DevindRichTextEditor',
            fileName: (format => `devind-rich-text-editor.${format}.js`)
        },
        rollupOptions: {
            plugins: [ScriptSetup()],
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue'
                }
            }
        }
    }
})
