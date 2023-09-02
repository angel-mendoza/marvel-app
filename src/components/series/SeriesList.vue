<template>
  <ul class="list-article">
    <li v-for="item in items" :key="item.id" class="item-article">
      <article @click="handleRedirectToDetail(item)">
        <img :src="`${item.thumbnail.path}.${item.thumbnail.extension}`" :alt="item.title">
        <div class="head-article">
          <SeriesType v-if="item.type" :type="item.type" />
          <Badge color="gray" outline>
            <font-awesome-icon :icon="['fas', 'calendar']" />
            {{ item.startYear }}{{ item.startYear !== item.endYear ? ` - ${item.endYear}` : '' }}
          </Badge>
        </div>
        <div class="body-article">
          <h2>{{ item.title }}</h2>
        </div>
        <footer>
          <ul>
            <li v-if="item.characters.available > 0">
              <Badge color="gray" outline>
                <font-awesome-icon :icon="['fas', 'user']" />
                characters: {{ item.characters.available }}
              </Badge>
            </li>
            <li v-if="item.comics.available > 0">
              <Badge color="gray" outline>
                <font-awesome-icon :icon="['fas', 'book']" />
                comics: {{ item.comics.available }}
              </Badge>
            </li>
            <li v-if="item.stories.available > 0">
              <Badge color="gray" outline>
                <font-awesome-icon :icon="['fas', 'folder-tree']" />
                stories: {{ item.stories.available }}
              </Badge>
            </li>
          </ul>
        </footer>
      </article>
    </li>
    <SeriesEmpty v-if="empty">
      You have reached the last article, please wait for us to load more.
    </SeriesEmpty>
  </ul>
  <SeriesError v-if="error">{{ error }}</SeriesError>
  <SeriesLoading v-if="loading" />
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

//interface
import { Serie } from '@/interface/Serie'

//store
import { useHistoryStore } from '@/store/history'

//components
import SeriesLoading from '@/components/series/SeriesLoading.vue'
import SeriesError from '@/components/series/SeriesError.vue'
import SeriesEmpty from '@/components/series/SeriesEmpty.vue'
import SeriesType from '@/components/series/SeriesType.vue'
import { Badge } from '@/components/utils'

//props
defineProps({
  items: {
    type: Array as () => Serie[],
    required: true
  },
  loading: {
    type: Boolean,
    required: true
  },
  empty: {
    type: Boolean,
    required: true
  },
  error: {
    type: String,
    default: ''
  }
})

// hooks
const router = useRouter()
const historyStore = useHistoryStore()

// functions
const setPositionScroll = () => {
  historyStore.setScroll(window.scrollY)
}

const handleRedirectToDetail = (item: Serie) => {
  setPositionScroll()
  router.push(`/series/${item.id}`)
}

</script>

<style lang="scss" scoped>
  @import "@/styles/_variables.scss";
  ul.list-article {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
  padding: 0;

    li.item-article{
      list-style: none;
      article {
        cursor: pointer;
        height: 100%;
        background-color: $bg-article;
        border-radius: $border-radius-card;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1),
          inset 0 1px 1px rgba(255, 255, 255, 0.1);
        img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: $border-radius-card;
        }
        .head-article{
          padding: 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .body-article{
          padding: 10px;
          h2 {
            font-size: 18px;
            margin-bottom: 8px;
            margin-top: 0;
          }
          p {
            font-size: 14px;
            color: $font-color-gray;
            margin-bottom: 0;
          }
        }
        footer{
          padding: 0 10px;
          margin-bottom: 10px;
          ul{
            list-style-type: none;
            margin: 0;
            padding: 0;
            li{
              display: inline-block;
              margin-right: 10px;
              margin-top: 10px;
            }
          }
        }
      }
    }
  }
</style>