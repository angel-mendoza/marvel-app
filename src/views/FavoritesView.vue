<template>
  <div>
    <SeriesList
      :error="''"
      :items="serieState"
      :empty="false"
      :loading="false"
    />
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'

  //store
  import { useHistoryStore } from '@/store/history'

  // hooks
  const historyStore = useHistoryStore()

  //components
  import SeriesList from '@/components/series/SeriesList.vue'

  //computed
  const serieState = computed(() => historyStore.getFavorites)


</script>