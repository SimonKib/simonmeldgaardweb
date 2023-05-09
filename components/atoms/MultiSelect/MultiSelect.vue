<template>
  <div class="flex flex-wrap gap-4">
    <AtomsMultiSelectMultiSelectButton
      v-for="element in props.data"
      :key="element.id"
      :selected="selected[element.id]"
      @click="toggleSelected(element.id)"
    >
      {{ element.name }}
    </AtomsMultiSelectMultiSelectButton>
  </div>
</template>

<script setup lang="ts">
interface IPickButtonElement {
  id: string;
  name: string;
}

interface Props {
  data?: IPickButtonElement[],
}

const props = withDefaults(defineProps<Props>(), {
  data: () => []
})

const selected = reactive<Record<string, boolean>>({})

const toggleSelected = (id: string) => {
  if (!selected[id]) { selected[id] = true } else { selected[id] = false }
}
</script>
