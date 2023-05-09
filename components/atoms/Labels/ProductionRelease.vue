<template>
  <div
    v-if="productionIsNew(production) || productionIsComingSoon(production)"
    class="border-2 border-grey-2 px-4 py-1 rounded-full text-md uppercase"
  >
    <span v-if="true || productionIsNew(production)">
      {{ $t("labels.new") }}
    </span>
    <span v-else>
      {{ $t("labels.comingSoon") }}
    </span>
  </div>
</template>
<script setup lang="ts">
import { ProductionStoryblok } from '~/component-types-sb'
const { productionIsComingSoon, productionIsNew } = useProductions()
defineProps<{
  production: ProductionStoryblok
}>()
</script>
