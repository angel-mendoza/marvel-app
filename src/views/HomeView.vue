<template>
  <div ref="scrollComponent">
    <SeriesList
      :error="error"
      :items="series"
      :empty="notMore"
      :loading="loading"
    />
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue'

  import { Serie } from '@/interface/Serie'

  import SeriesList from '@/components/series/SeriesList.vue'
  import {getSeriesPage} from '@/composable/fetch'

  const series = ref<Serie[]>([])
  const page = ref<number>(0)
  const error = ref<string>('')
  const loading = ref<boolean>(false)
  const notMore = ref<boolean>(false)
  const scrollComponent = ref<HTMLDivElement>()

  const getData = () => {
    loading.value = true

    getSeriesPage('/series', page.value)
      .then(response => {
        if (response.length > 0) {
          series.value.push(...response)
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

  onMounted(() => {
    getData()

    window.addEventListener('scroll', () => {
      const element = scrollComponent.value
      if (element && element.getBoundingClientRect().bottom < window.innerHeight) {
        page.value++
        getData()
      }
    })
  })

</script>