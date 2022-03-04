import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
import Vuetify from 'vuetify'
import App from '@/components/App.vue'

Vue.use(VueCompositionAPI)
Vue.use(Vuetify)

new Vue({
  render: h => h(App),
  vuetify: new Vuetify()
}).$mount('#app')
