<template>
  <div>
    <CharacterLoading v-if="loading" />
    <div v-if="data" class="character-item">
      <img :src="`${data.thumbnail.path}.${data.thumbnail.extension}`" :alt="data.title">
      <p v-if="data.name">{{ data.name }}</p>
      <p v-if="data.title">{{ data.title }}</p>
    </div>
    <div v-if="error">
      <p>{{ error }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { ref, onMounted } from 'vue'

  //interface
  import { Serie } from '@/interface/Serie'

  //utils
  import { getSeriesPage } from '@/composable/fetch'
  import { preparePath } from '@/composable/utils'

  //components
  import CharacterLoading from './ResourceItem.vue'

  //props
  const props = defineProps({
    url: {
      type: String,
    }
  })

  //states
  const error = ref<string>('')
  const loading = ref<boolean>(false)
  const data = ref<Serie>()


  //functions
  const getData = () => {
    const url = preparePath(props.url)
    if (url) {
      loading.value = true
      getSeriesPage(url, 0)
        .then((response) => {
          data.value = response[0]
        })
        .catch(err => {
          error.value = err.message
        })
        .finally(() => {
          loading.value = false
        })
    }
  }

  //Lifecycle
  onMounted(() => getData())
</script>

<style lang="scss" scoped>
.character-item{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 110px;
  img{
    height: 80px;
    width: 80px;
    border-radius: 50%;
  }
  p{
    text-align: center;
  }
}
</style>