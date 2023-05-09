<template>
  <NuxtPicture
    v-if="image?.filename !== undefined && image.filename.trim() !== ''"
    :quality="90"
    :modifiers="modifiers"
    provider="storyblok"
    :src="image?.filename"
    :alt="image?.alt"
    :title="image?.title"
    :copyright="image?.copyright || 'Mesterlære ApS'"
    :loading="loading"
    :width="width"
    :height="height"
    :img-attrs="imgAttrs"
  />
</template>

<script setup lang="ts">
import { AssetStoryblok } from '~~/component-types-sb'
interface Props {
  image?: AssetStoryblok
  width?: number
  height?: number
  imgAttrs?: Object
  lazy?: Boolean
}
const props = defineProps<Props>()

const loading = props.lazy === false ? undefined : 'lazy'

const modifiers = computed(() => {
  const returnObj: Record<string, any> = {}
  const focal = props.image?.focus
  if (focal !== undefined) {
    returnObj.filters = {
      focal
    }
  } else {
    returnObj.smart = true
  }

  return returnObj
})

</script>
