<template>
  <n-alert
    v-show="show"
    :type="type"
    class="atoms-feedback-alert"
    :class="{
      'bg-white': (type === 'info'),
      'bg-green-dark': (type === 'success'),
      'bg-yellow-dark': (type === 'warning'),
      'bg-red-dark': (type === 'error'),

      'text-black': (type === 'info')
    }"
    :bordered="false"
    :title="derivedTitle"
    :closable="closable"
    :on-close="onClose"
  >
    <template #icon>
      <n-icon>
        <slot name="icon">
          <Info12Regular v-if="type === 'info'" />
          <Checkmark12Filled v-else-if="type === 'success'" />
          <Warning12Filled v-else-if="type === 'warning'" />
          <ErrorCircle12Filled v-else-if="type === 'error'" />
        </slot>
      </n-icon>
    </template>
    <slot />
  </n-alert>
</template>
<script lang="ts" setup>
import { Checkmark12Filled, ErrorCircle12Filled, Warning12Filled, Info12Regular } from '@vicons/fluent'
import { NAlert, NIcon } from 'naive-ui'
const { $t } = useNuxtApp()
const props = defineProps<{
  title?: string
  show: boolean
  type: 'info' | 'success' | 'warning' | 'error'
  closable?: boolean
  onClose?: Function
}>()

const derivedTitle = computed<string>(() => {
  if (props.title !== undefined) {
    return props.title
  }
  return $t(`${ props.type }.title`) as string
})
</script>
<style lang="css">
.atoms-feedback-alert .n-alert-body__content,
.atoms-feedback-alert .n-alert__icon,
.atoms-feedback-alert .n-alert-body__title {
  color: inherit !important;
}
</style>
