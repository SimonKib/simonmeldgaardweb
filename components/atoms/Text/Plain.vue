<template>
  <div class="component-text-plain">
    <span
      v-for="(line, indx) of theText.split('\n')"
      :key="indx"
    >
      {{ line }}<br>
    </span>
  </div>
</template>
<script lang="ts" setup>

const { $t, $ti } = useNuxtApp()

const props = defineProps<{
  text?: string
  t?: string // the translation key to base this on
  interpolation?: { [key: string]: string | number } // The interpolation keys used for translation
}>()

const theText = computed<string>(() => {
  if (props.text !== undefined) {
    return props.text
  }
  let text: string | string[] | undefined
  if (props.t !== undefined) {
    if (props.interpolation !== undefined) {
      text = $ti(
        props.t,
        false,
        props.interpolation
      )
    } else {
      text = $t(props.t)
    }
    if (Array.isArray(text)) {
      return text.join(', ')
    }
    return text || ''
  }
  return ''
})

</script>
