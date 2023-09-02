<template>
  <teleport to="body">
    <div v-if="show" class="modal">
      <div class="modal-content">
        <slot></slot>
        <Button color="secondary" @click="handleClick">Close</Button>
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import Button from './ButtonComponent.vue'
const props = defineProps({
  show: {
    type: Boolean,
    required: true
  },
  onClose: {
    type: Function,
    required: true
  }
})

const handleClick = (): void => {
  props.onClose()
}
</script>

<style scoped lang="scss">
  @import "@/styles/_variables.scss";

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: $bg-modal;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  display: flex;
  flex-direction: column;
  height: 9rem;
  align-items: center;
  justify-content: space-around;
  background-color: #516285;
  padding: 20px;
}
</style>