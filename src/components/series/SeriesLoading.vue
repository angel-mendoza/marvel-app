<template>
  <ul>
    <li v-for="(index) in numberLoading" :key="index">
      <div class="img"></div>
      <h1></h1>
    </li>
  </ul>
</template>
<script setup lang="ts">
import { getRandomInt } from '@/composable/utils'
const numberLoading = getRandomInt()
</script>
<style lang="scss" scoped>
  @import "@/styles/_variables.scss";
  ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
  padding: 0;

  li {
    background-color: $bg-article;
    border-radius: $border-radius-card;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    list-style: none;

    .img, h1{
      background: #eee;
      background: linear-gradient(110deg, #516285 8%, #596c93 18%, #516285 33%);
      background-size: 200% 100%;
      animation: 1.5s shine linear infinite;
    }
    .img {
      height: 200px;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    h1 {
      height: 30px;
      margin: 10px;
    }
  }
}
@keyframes shine {
  to {
    background-position-x: -200%;
  }
}
</style>