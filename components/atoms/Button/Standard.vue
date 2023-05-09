<template>
  <component
    :is="componentTag"
    :to="to"
    class="bg-blue-dark-lighter rounded-full uppercase font-bold items-center relative"
    :class="{
      'bg-transparent border-grey-1 border-2': (variant === 'outline'),
      'bg-turquoise-light text-black': (variant === 'primary'),
      'bg-turquoise-dark': (variant === 'accent1'),
      'w-fit': (wide !== true),
      /* 'v-max': (wide === true) For some reason not needed */
      'text-md px-10 py-3': (size !== 'small'),
      'text-sm px-6 py-2': (size === 'small'),
      'bg-transparent border-red-dark border-2 text-red-dark': (clickedOnce)
    }"
    style="appearance: button;"
    :disabled="isDisabled || loading"
    @click="clicked"
  >
    <div
      class="flex gap-2 items-center justify-center pt-[2px]"
      :class="{ 'opacity-0': loading }"
    >
      <div
        v-if="hasDot === true"
        class="w-3 h-3 bg-turquoise-light rounded-full"
      />
      <span v-if="clickedOnce">{{ verifyLabel }}</span>
      <slot v-else />
    </div>
    <AtomsSpinnerBarsSpinner
      v-if="loading"
      class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
      :class="{
        'text-black': (variant === 'primary'),
        'text-white': (variant === 'primary' || variant === 'subtle')
      }"
      width="24"
      height="24"
    />
  </component>
</template>

<script lang="ts" setup>
interface Props {
  to?: string
  variant?: 'primary' | 'accent1' | 'outline' | 'subtle' // add more if needed
  loading?: boolean
  wide?: boolean
  size?: 'small' // add more variants if needed
  hasDot?: boolean
  isDisabled?: boolean // to override disabled state
  verifyLabel?: string // If an extra verification step is needed
}
const props = defineProps<Props>()
const emits = defineEmits<{ (e: 'verified'): void }>()
const clickedOnce = ref(false)

const componentTag = computed(() => {
  if (props.to) {
    return defineNuxtLink({})
  }
  return 'button'
})

const clicked = () => {
  if (clickedOnce.value === true) {
    emits('verified')
  } else if (props.verifyLabel?.trim() !== undefined && props.verifyLabel?.trim() !== '') {
    clickedOnce.value = true
  }
}
</script>
