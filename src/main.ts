import Vue from 'vue'
import '@/plugins/composition-api'
import vuetify from '@/plugins/vuetify'
import App from '@/components/App.vue'

new Vue({
  render: h => h(App),
  vuetify
}).$mount('#app')
