<template>
  <!-- eslint-disable vue/no-v-html -->
  <article
    class="prose lg:prose-lg empty:hidden"
    v-html="(hasContent) ? body : ''"
  />
  <!-- eslint-enable vue/no-v-html -->
</template>

<script setup lang="ts">
/* import cloneDeep from 'clone-deep'

const mySchema = cloneDeep(RichTextSchema)
// Check the base RichTextSchema source here https://github.com/storyblok/storyblok-js-client/blob/v4/source/schema.js
mySchema.marks.styled = (node) => {
  return {
    tag: [
      {
        tag: (node?.attrs?.class?.includes('block')) ? 'div' : 'span',
        attrs: node.attrs
      }
    ]
  }
} */

const props = defineProps<{
  content: any // Storyblok Richtext known as any
}>()
const body = computed(() => renderRichText(props.content/* , {
  schema: mySchema
} */))

const hasContent = computed<boolean>(() => {
  if (
    props.content === undefined ||
    props.content === null ||
    typeof props.content?.content !== 'object' ||
    props.content?.content.length === undefined
  ) {
    return false
  }
  let hasChildContent = false
  for (const child of props.content.content) {
    if (child.content !== undefined) {
      hasChildContent = true
      break
    }
  }
  return hasChildContent
})
</script>
