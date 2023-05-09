<template>
  <NuxtLayout>
    <template #header>
      &nbsp;
    </template>
    <div class="flex flex-col gap-8 items-center pt-20">
      <AtomsTypographyMainHeading type="h1">
        {{ $t(`error.${errorTranslationKey}.title`) }}
      </AtomsTypographyMainHeading>
      <p>
        {{ $t(`error.${errorTranslationKey}.text`) }}
      </p>
      <AtomsButtonStandard @click="handleError">
        {{ $t(`error.${errorTranslationKey}.actionLabel`) }}
      </AtomsButtonStandard>
    </div>
  </NuxtLayout>
</template>
<script setup lang="ts">
interface IMayBeNuxtError {
  message?: string,
  stack?: string,
  statusCode?: number,
  statusMessage?: string,
  url?: string
}
const props = defineProps<{ error: IMayBeNuxtError }>()
console.log(props.error)

const errorTranslationKey = computed<string>(() => {
  if (props.error.statusCode === 404) {
    return 'fourofour'
  }
  return 'unknown'
})

const handleError = () => clearError({ redirect: '/' })

</script>
