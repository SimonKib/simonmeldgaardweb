<template>
  <svg
    :width="$props.width"
    :height="$props.height"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      :class="{spinner: paused !== true}"
      x="1"
      y="4"
      width="6"
      height="16"
      fill="currentColor"
    />
    <rect
      class="middle"
      :class="{spinner: paused !== true}"
      x="9"
      y="1"
      width="6"
      height="22"
      fill="currentColor"
    />
    <rect
      class="last"
      :class="{spinner: paused !== true}"
      x="17"
      y="4"
      width="6"
      height="16"
      fill="currentColor"
    />
  </svg>
</template>

<script lang="ts" setup>
interface Props {
  width?: number | string
  height?: number | string
  paused?: boolean
}
withDefaults(defineProps<Props>(), {
  width: 24,
  height: 24
})
</script>

<style scoped>
.spinner {
  animation: spinner-animation .8s linear infinite;
  animation-delay: -.8s
}

.middle {
  animation-delay: -.65s
}

.last {
  animation-delay: -.5s
}

@keyframes spinner-animation {
  0% {
    y: 1px;
    height: 22px
  }

  93.75% {
    y: 5px;
    height: 14px;
    opacity: .2
  }
}
</style>
