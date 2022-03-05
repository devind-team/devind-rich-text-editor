import Vue from 'vue'
import '@/plugins/composition-api'
import i18n from '@/plugins/i18n'
import vuetify from '@/plugins/vuetify'
import App from '@/components/App.vue'

new Vue({
  render: h => h(App),
  i18n,
  vuetify
}).$mount('#app')
