<template>
  <div class="container flex flex-col gap-8 items-center">
    <AtomsHeaderSettings :go-back-to="goBackTo">
      <template #heading>
        <slot name="heading" />
      </template>
      <slot name="preample" />
    </AtomsHeaderSettings>
    <div class="w-full md:max-w-2xl flex flex-col gap-8">
      <AuthRequiredHandler>
        <slot />
      </AuthRequiredHandler>
    </div>
  </div>
</template>
<script lang="ts" setup>
defineProps<{
  goBackTo?: string
}>()
</script>
