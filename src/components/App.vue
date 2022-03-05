<template lang="pug">
v-app
  v-main
    v-container
      v-row(align="center")
        v-col
          v-card(flat)
            v-card-title
              .d-flex.justify-space-between(style="width: 100%")
                | {{ $t('title') }}
                div
                  | {{ `${$t('locale')}: ` }}
                  select(v-model="$i18n.locale")
                    option(
                      v-for="(lang, i) in langs"
                      :key="`Lang${i}`"
                      :value="lang"
                    ) {{ lang }}
            v-card-text
              rich-text-editor
</template>

<script setup>
import RichTextEditor from '@/components/RichTextEditor.vue'
const langs = ['en', 'ru']
</script>
