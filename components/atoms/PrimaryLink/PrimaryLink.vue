<template>
  <NuxtLink
    :to="$props.to"
    class="text-turquoise-light"
  >
    <slot />
  </NuxtLink>
</template>

<script lang="ts" setup>
interface Props {
  to: string;
}
defineProps<Props>()
</script>
