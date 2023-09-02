<template>
  <div>
    <NavbarApp />
    <main>
      <slot></slot>
    </main>
  </div>
</template>
<script setup lang="ts">
import NavbarApp from '@/components/NavbarApp.vue'
</script>