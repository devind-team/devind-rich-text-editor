<template lang="pug">
div
  .rich-text-editor Rich text editor
  div Value: {{ counter }}
  button(@click="inc") Inc
</template>

<script setup lang="ts">
import { ref } from '@vue/composition-api'

const counter = ref(0)
const inc = () => (counter.value += 1)
</script>

<style lang="sass">
.rich-text-editor
  font-weight: bold
</style>
