<template>
  <Modal
    :show="showModal"
    :on-close="handleCloseModal"
  >
    <h2>sorry, you can only add a maximum of 4 series.</h2>
  </Modal>
  <article v-if="serie" class="detail-serie">
    <img :src="`${serie.thumbnail.path}.${serie.thumbnail.extension}`" :alt="serie.title">
    <div class="head-article">
      <SeriesType v-if="serie.type" :type="serie.type" />
      <Badge color="gray" outline>
        <font-awesome-icon :icon="['fas', 'calendar']" />
        {{ serie.startYear }}{{ serie.startYear !== serie.endYear ? ` - ${serie.endYear}` : '' }}
      </Badge>
    </div>
    <div class="body-article">
      <h1>{{ serie.title }}</h1>
      <p>{{ serie.description }}</p>

      <div v-if="serie.characters.available > 0" class="section">
        <h4>characters:</h4>
        <section>
          <ResourceItem
            v-for="(item, index) in serie.characters.items"
            :key="index"
            :url="item.resourceURI"
          />
        </section>
      </div>

      <div v-if="serie.comics.available > 0" class="section">
        <h4>comics:</h4>
        <section>
          <ResourceItem
            v-for="(item, index) in serie.comics.items"
            :key="index"
            :url="item.resourceURI"
          />
        </section>
      </div>

    </div>
    <footer>
      <Button color="gray" outline @click="back">
        <font-awesome-icon :icon="['fas', 'fa-chevron-left']" /> Go back
      </Button>
      <Button color="primary" @click="handleLike(serie.id)">
        <font-awesome-icon v-if="like" :icon="['fas', 'fa-heart']" />
        <font-awesome-icon v-else :icon="['fas', 'fa-heart-broken']" />
        {{ like ? 'Add to' : 'Remove from' }} your favorites
      </Button>
    </footer>
  </article>
  <SeriesError v-else>
    404 Serie not found
  </SeriesError>
</template>
<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { onBeforeMount, ref, computed } from 'vue'

//components
import SeriesError from '@/components/series/SeriesError.vue'
import SeriesType from '@/components/series/SeriesType.vue'
import ResourceItem from '@/components/series/Resource/ResourceItem.vue'
import { Badge, Button, Modal } from '@/components/utils'

//interface
import { Serie } from '@/interface/Serie'

//store
import { useHistoryStore } from '@/store/history'

// hooks
const historyStore = useHistoryStore()
const route = useRoute()
const router = useRouter()

//state
const serie = ref<Serie>()
const showModal =ref<boolean>(false)
const id = parseInt(route.params.id as string)

//computed
const like = computed(() => historyStore.findOneFavorites(id))
const favorites = computed(() => historyStore.getFavorites)

//functions
const back = () => router.back()
const handleCloseModal = () => showModal.value = false
const handleLike = (id: number) => {
  if (favorites.value.length === 4 && like.value ) {
    showModal.value = true
  } else {
    if (like.value && favorites.value.length <= 4) {
      historyStore.addFavorites(id)
    } else {
      historyStore.removeFavorites(id)
    }
  }

}
//lifecycle
onBeforeMount(() => {
  serie.value = historyStore.getOneSerie(id)
})
</script>

<style lang="scss" scoped>
  @import "@/styles/_variables.scss";
  .detail-serie{
    height: 100%;
    background-color: $bg-article;
    border-radius: $border-radius-card;
    img {
      width: 100%;
      height: 300px;
      object-fit: cover;
      border-top-left-radius: $border-radius-card;
      border-top-right-radius: $border-radius-card;
    }
    .head-article{
      padding: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .body-article{
      padding: 10px;
      h1{
        color: $font-color-title;
        margin-top: 0;
        margin-bottom: 10px;
      }
      p{
        margin-top: 0;
        color: $font-color-gray;
      }
      div.section{

        background-color: $bg-section;
        padding: 10px;
        margin-bottom: 20px;
        h4{
          margin-top: 0;
          color: $font-color-title;
        }
        section{
          display: flex;
          overflow: auto;
        }
      }
    }
    footer{
      display: flex;
      justify-content: space-between;
      padding: 0px 10px 30px 10px;
    }
  }
</style>