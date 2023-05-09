<template>
  <p
    class="text-grey-2"
    :class="{
      'sm:text-2base sm:leading-2base': is('default'),
      'text-sm leading-md sm:text-base sm:leading-2md font-medium': is('small'),
      'text-2sm leading-sm': is('extra-small'),
    }"
  >
    <slot />
  </p>
</template>

<script setup lang="ts">
interface Props {
  type?: 'default' | 'small' | 'extra-small'
}
const props = withDefaults(defineProps<Props>(), {
  type: 'default'
})
const is = (type: string) => type === props.type
</script>
