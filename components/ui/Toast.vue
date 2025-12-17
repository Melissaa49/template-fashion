<template>
  <Transition name="toast">
    <div v-if="visible" class="toast">
      {{ message }}
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { useToast } from '@/composables/useToast'
const { visible, message } = useToast()
</script>

<style scoped>
.toast {
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  background: #111;
  color: #fff;
  padding: .8rem 1.4rem;
  border-radius: 999px;
  font-size: .85rem;
  z-index: 1000;
}

.toast-enter-active,
.toast-leave-active {
  transition: all .25s ease;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translate(-50%, 10px);
}
</style>
