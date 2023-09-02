<template>
  <div class="badge" :class="outline ? `badge-outline-${color}` : `badge-${color}`">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
export type Color = 'red' | 'blue' | 'gray'

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

@each $name, $color in $colors-badge {
  .badge-#{$name} {
    background-color: $color;
    color: $font-color;
  }
}

@each $name, $color in $colors-badge {
  .badge-outline-#{$name} {
    border: 1px solid $color;
    color: $color;
  }
}

.badge {
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: $border-radius-badge;
  font-size: 0.875rem;
  font-weight: bold;
  text-transform: uppercase;
}

</style>