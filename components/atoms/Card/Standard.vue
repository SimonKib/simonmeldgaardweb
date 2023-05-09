<template>
  <div class="relative w-full flex flex-col gap-8 items-center max-w-[330px] h-full">
    <div
      class="w-full border-2 border-blue-dark-lighter rounded-xl"
    >
      <div class="flex flex-col items-center bg-blue-dark-lighter p-6 space-y-8">
        <AtomsTypographySubHeading>
          <slot name="subHeading" />
        </AtomsTypographySubHeading>
        <AtomsTypographyMainHeading type="h1">
          <slot name="heading" />
        </AtomsTypographyMainHeading>
      </div>
      <div class="flex flex-col items-center p-6 pb-10 space-y-6 relative">
        <AtomsSpinnerBarsSpinner
          v-if="loading"
          class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-white"
          width="24"
          height="24"
        />
        <slot v-else />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
interface Props {
  loading?: boolean
}
defineProps<Props>()
</script>
