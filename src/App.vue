<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <LayoutContainer>
    <router-view />
  </LayoutContainer>
</template>

<script setup lang="ts">
import LayoutContainer from '@/layout/LayoutContainer.vue'
</script>

<style lang="scss">
</style>
