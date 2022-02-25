import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'

export { default as RichTextEditor } from './src/components/RichTextEditor.vue'

export default {
  install() {
    Vue.use(VueCompositionAPI)
  }
}
