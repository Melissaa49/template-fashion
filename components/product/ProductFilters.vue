<template>
  <div class="chips">
    <button
      v-for="c in chips"
      :key="c"
      class="chip"
      :class="{ active: modelValue === c }"
      @click="$emit('update:modelValue', c)"
    >
      {{ c }}
    </button>
  </div>
</template>

<script setup lang="ts">
const chips = ['Toutes', 'Soie', 'Lin', 'Coton']

defineProps<{ modelValue: string }>()
defineEmits<{ (e:'update:modelValue', v: string): void }>()
</script>

<style scoped>
.chips{
  display:flex;
  gap: .8rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
      justify-content: space-around
}

.chip{
  padding: .65rem 1.2rem;
  border-radius: 999px;
  border: 1px solid rgba(0,0,0,.12);
  background: rgba(255,255,255,.45);
  cursor:pointer;
  font-family: "Inter", sans-serif;
}

.chip.active{
  background: rgba(0,0,0,.06);
}
</style>
