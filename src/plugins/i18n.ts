import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from '@/messages/en.json'
import demoEn from '@/messages/demo-en.json'
import ru from '@/messages/ru.json'
import demoRu from '@/messages/demo-ru.json'

Vue.use(VueI18n)

export default new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: { ...en, ...demoEn },
    ru: { ...ru, ...demoRu }
  }
})
