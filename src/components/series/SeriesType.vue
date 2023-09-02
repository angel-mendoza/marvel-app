<template>
  <Badge :color="color">
    {{ type }}
  </Badge>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import {Badge} from '@/components/utils'
import { Color } from '@/components/utils/BadgeComponent.vue'

const props = defineProps({
  type: {
    type: String,
    required: true
  },
})

const color = ref<Color>('blue')

switch (props.type) {
  case 'limited':
    color.value = 'blue'
    break

  case 'collection':
    color.value = 'red'
    break
    
    default:
    color.value = 'gray'
    break
}
</script>