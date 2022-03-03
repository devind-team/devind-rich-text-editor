import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
import RichTextEditor from './components/RichTextEditor.vue'

Vue.use(VueCompositionAPI)

new Vue({
  render: h => h(RichTextEditor)
}).$mount('#app')
