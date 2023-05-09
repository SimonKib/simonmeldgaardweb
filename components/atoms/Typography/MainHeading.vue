<template>
  <component
    :is="tag"
    :class="{
      'font-serif': is('h1') || is('h2') || is('h3') || is('h4') || is('h5') || is('h6') || is('h7'),
      'font-sans': is('h1-sans') || is('h2-sans') || is('h3-sans') || is('h4-sans') || is('h5-sans') || is('h6-sans') || is('h7-sans'),
      'text-xl font-semibold leading-xl': is('h2') || is('h2-sans'),
      'text-2lg': is('h3') || is('h3-sans'),
      'text-lg font-medium leading-2base': is('h4') || is('h4-sans'),
      'text-2base font-medium leading-md': is('h5') || is('h5-sans'),
      'text-md font-bold uppercase leading-2sm': is('h6') || is('h6-sans'),
      'text-sm font-bold uppercase leading-2xs': is('h7') || is('h7-sans'),
    }"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
interface Props {
  type: 'h1' | 'h1-sans' | 'h2' | 'h2-sans' | 'h3' | 'h3-sans' | 'h4' | 'h4-sans' | 'h5' | 'h5-sans' | 'h6' | 'h6-sans' | 'h7' | 'h7-sans';
}
const props = defineProps<Props>()
const is = (type: string) => {
  return props.type === type
}
const tag = props.type.replace('-sans', '')
</script>

<style lang="postcss" scoped>
h1 {
  @apply text-2lg leading-2lg sm:text-xl sm:leading-xl md:text-2xl md:leading-2xl font-semibold;
}

h3 {
  @apply text-lg leading-lg font-normal;
}
</style>
