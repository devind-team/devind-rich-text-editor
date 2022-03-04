<template lang="pug">
v-app
  v-main
    v-container
      v-row(align="center")
        v-col
          v-card(flat)
            v-card-title Rich text editor
            v-card-text
              rich-text-editor
</template>

<script setup>
import RichTextEditor from '@/components/RichTextEditor.vue'
</script>
