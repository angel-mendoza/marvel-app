<template>
  <ul>
    <li v-for="item in items" :key="item.id">
      <article>
        <img :src="`${item.thumbnail.path}.${item.thumbnail.extension}`" :alt="item.title">
        <div class="body-article">
          <h1>{{ item.title }}</h1>
          <p>ID: {{ item.id }}</p>
        </div>
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
import { Serie } from '@/interface/Serie'
import SeriesLoading from '@/components/series/SeriesLoading.vue'
import SeriesError from '@/components/series/SeriesError.vue'
import SeriesEmpty from '@/components/series/SeriesEmpty.vue'

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
</script>

<style lang="scss" scoped>
  @import "@/styles/_variables.scss";
  ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
  padding: 0;

    li{
      list-style: none;
      article {
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
        .body-article{
          padding: 10px;
          h1 {
            font-size: 18px;
            margin-bottom: 8px;
          }
          p {
            font-size: 14px;
            color: #666;
            margin-bottom: 0;
          }
        }
      }
    }
  }
</style>