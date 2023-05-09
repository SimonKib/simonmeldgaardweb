<template>
  <div class="container text-center mb-9">
    <div class="flex items-start">
      <AtomsButtonBackLink :go-back-to="goBackTo" />
      <div class="flex-auto flex flex-col items-center">
        <AtomsTypographyMainHeading
          type="h1"
          class="w-full md:max-w-2xl"
        >
          <slot name="heading" />
        </AtomsTypographyMainHeading>
      </div>
      <div class="w-11" />
    </div>
    <AtomsTypographySubHeading class="w-full md:max-w-2xl mx-auto">
      <slot />
    </AtomsTypographySubHeading>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  goBackTo?: string
}>()
</script>
