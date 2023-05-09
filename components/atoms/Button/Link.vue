<template>
  <button
    type="button"
    class="text-turquoise-light font-medium relative"
    :disabled="loading || isDisabled"
  >
    <AtomsSpinnerBarsSpinner
      v-if="loading"
      class="absolute text-turquoise-light"
      width="24"
      height="24"
    />
    <div :class="{'pl-12 italic': loading}">
      <slot />
    </div>
  </button>
</template>
<script setup lang="ts">
defineProps<{
  loading?: boolean
  isDisabled?: boolean // to override disabled state
}>()
</script>
