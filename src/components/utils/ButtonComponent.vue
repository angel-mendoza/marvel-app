<template>
  <button class="btn" :class="outline ? `btn-outline-${color}` : `btn-${color}`">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
export type Color = 'primary' | 'secondary' | 'gray'

defineProps({
  color: {
    type: String as () => Color,
    required: true
  },
  outline: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

@each $name, $color in $colors-button {
  .btn-#{$name} {
    background-color: $color;
    color: $font-color;
    border: 0;
  }
  .btn-#{$name}:hover {
    opacity: 0.5;
    transition: opacity 0.3s ease;
  }
}

@each $name, $color in $colors-button {
  .btn-outline-#{$name} {
    border: 1px solid $color;
    color: $color;
    background-color: transparent;
  }
  .btn-outline-#{$name}:hover {
    border: 1px solid $color;
    color: $font-color;
    background-color: $color;
    transition: background-color 0.5s ease;
  }
}

.btn {
  display: inline-block;
  padding: 0.5rem 2rem;
  font-size: 1rem;
  border-radius: $border-radius-button;
}

</style>