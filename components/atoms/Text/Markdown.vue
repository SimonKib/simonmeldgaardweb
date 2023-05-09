<!-- eslint-disable vue/no-v-html -->
<template>
  <div
    name="component-text-markdown"
    class="prose lg:prose-lg w-full"
    v-html="theHtml"
  >
  </div>
</template>
<script lang="ts" setup>
import { marked } from 'marked'
const { $t, $ti } = useNuxtApp()

const props = defineProps<{
  text?: string
  t?: string // the translation key to base this on
  interpolation?: { [key: string]: string | number } // The interpolation keys used for translation
}>()

const theHtml = computed<string | undefined>(() => {
  return (theText.value === undefined) ? undefined : marked(theText.value)
})

const theText = computed<string>(() => {
  if (props.text !== undefined) {
    return props.text
  }
  let text: string | string[] | undefined
  if (props.t !== undefined) {
    if (props.interpolation !== undefined) {
      text = $ti(
        props.t,
        false,
        props.interpolation
      )
    } else {
      text = $t(props.t)
    }
    if (Array.isArray(text)) {
      return text.join(', ')
    }
    return text || ''
  }
  return ''
})

</script>
