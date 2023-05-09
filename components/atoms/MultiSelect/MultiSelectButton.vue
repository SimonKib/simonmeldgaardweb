<template>
  <button
    :class="{'bg-turquoise-dark': props.selected, 'rounded px-8 py-4 uppercase bg-blue-dark-lighter text-white text-sm': true}"
    @click="() => $emit('click')"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
interface MultiSelectButtonProps {
  selected?: boolean;
}
withDefaults(defineProps<MultiSelectButtonProps>(), {
  selected: false
})
defineEmits<{(e: 'click'): void }>()
</script>
