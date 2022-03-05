import path from 'path'
import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import scriptSetup from 'unplugin-vue2-script-setup/vite'
import libCss from 'vite-plugin-libcss'
import Components from 'unplugin-vue-components/vite'
import { VuetifyResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig(({ command }) => {
  const plugins = [createVuePlugin(), scriptSetup(), libCss()]
  if (command === 'serve') {
    plugins.push(
      Components({
        resolvers: [VuetifyResolver()]
      })
    )
  }
  return {
    resolve: {
      alias: [
        {
          find: '@/',
          replacement: `${path.resolve(__dirname, './src')}/`
        }
      ]
    },
    plugins,
    build: {
      lib: {
        entry: path.resolve(__dirname, 'index.ts'),
        name: 'DevindRichTextEditor',
        fileName: format => `devind-rich-text-editor.${format}.js`
      },
      rollupOptions: {
        external: ['vue', '@vue/composition-api', 'vuetify'],
        output: {
          globals: {
            vue: 'Vue',
            '@vue/composition-api': 'VueCompositionAPI',
            vuetify: 'Vuetify'
          }
        }
      }
    }
  }
})
