<template>
  <div
    v-editable="blok"
    class="space-y-8"
  >
    <StoryblokComponent
      v-for="item in blok.blocks"
      :key="item._uid"
      :blok="item"
    />
  </div>
</template>

<script setup lang="ts">
import { PageStoryblok } from '~/component-types-sb'

interface Props {
  blok: PageStoryblok
}

defineProps<Props>()
</script>
