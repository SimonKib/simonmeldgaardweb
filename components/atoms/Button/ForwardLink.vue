<template>
  <NuxtLink
    class="text-md uppercase min-w-fit text-blue-dark-deep hover:text-blue-dark-lighter flex gap-2 items-center print:hidden"
    :to="to"
  >
    <span class="text-white">
      <slot />
    </span>
    <svg
      class="inline"
      width="11"
      height="13"
      viewBox="0 0 11 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.50049 1.87012L9.51099 6.31186C9.57677 6.34713 9.63128 6.39733 9.66914 6.45752C9.707 6.5177 9.72691 6.58579 9.72691 6.65508C9.72691 6.72437 9.707 6.79247 9.66914 6.85265C9.63128 6.91284 9.57677 6.96304 9.51099 6.99831L1.50049 11.44"
        stroke="#00F0FF"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </NuxtLink>
</template>
<script lang="ts" setup>
defineProps<{
  to?: string
}>()
</script>
