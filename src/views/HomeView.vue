<template>
  <div ref="scrollComponent">
    <SeriesList
      :error="error"
      :items="serieState"
      :empty="notMore"
      :loading="loading"
    />
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, computed } from 'vue'

  //store
  import { useHistoryStore } from '@/store/history'

  // hooks
  const historyStore = useHistoryStore()

  //interface
  import { Serie } from '@/interface/Serie'

  //components
  import SeriesList from '@/components/series/SeriesList.vue'
  import {getSeriesPage} from '@/composable/fetch'

  //states
  const series = ref<Serie[]>([])
  const page = ref<number>(0)
  const error = ref<string>('')
  const loading = ref<boolean>(false)
  const notMore = ref<boolean>(false)
  const scrollComponent = ref<HTMLDivElement>()

  //computed
  const serieState = computed(() => historyStore.getAllSeries)
  const scrollState = computed(() => historyStore.getScroll)

  //functions
  const getData = () => {
    if (serieState.value.length === 0) {
      loading.value = true
      getSeriesPage('/series', page.value)
        .then(response => {
          if (response.length > 0) {
            series.value.push(...response)
            historyStore.setSeries(series.value)
          } else {
            notMore.value = true
          }
        })
        .catch(err => {
          error.value = err.message
        })
        .finally(() => {
          loading.value = false
        })
    }
  }

  onMounted(() => {
    getData()
    if (scrollState.value !== 0) {
      window.scrollBy(0, scrollState.value)
    }

    window.addEventListener('scroll', () => {
      const element = scrollComponent.value
      if (element && element.getBoundingClientRect().bottom < window.innerHeight) {
        page.value++
        getData()
      }
    })
  })

</script>