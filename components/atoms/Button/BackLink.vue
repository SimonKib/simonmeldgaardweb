<template>
  <NuxtLink
    class="text-blue-dark-deep hover:text-blue-dark-lighter flex gap-2 items-center w-11 print:hidden"
    @click="doGoBack"
  >
    <svg
      class="w-10"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="21.8573"
        cy="21.7142"
        r="21.4286"
        fill="currentColor"
      />
      <path
        d="M34.238 21.7144H13.2856"
        stroke="white"
        stroke-width="2"
        stroke-linejoin="round"
      />
      <path
        d="M21.8571 13.1428L13.2856 21.7143L21.8571 30.2857"
        stroke="white"
        stroke-width="2"
      />
    </svg>
    <span class="text-white">
      <slot />
    </span>
  </NuxtLink>
</template>
<script lang="ts" setup>
const router = useRouter()
const { goBack } = useRouteHelper()

const props = defineProps<{
  goBackTo?: string
}>()

const doGoBack = () => {
  if (props.goBackTo) {
    router.push(props.goBackTo)
  } else {
    goBack()
  }
}
</script>
