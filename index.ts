import { PluginObject } from 'vue'
import VueI18n from 'vue-i18n'
import en from '@/messages/en.json'
import ru from '@/messages/ru.json'

export const RichTextEditorPlugin: PluginObject<{ i18n: VueI18n }> = {
  install(_, options) {
    if (options) {
      options.i18n.mergeLocaleMessage('en', {
        richTextEditor: en
      })
      options.i18n.mergeLocaleMessage('ru', {
        richTextEditor: ru
      })
    }
  }
}

export { default as RichTextEditor } from './src/components/RichTextEditor.vue'
