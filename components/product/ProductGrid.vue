<template>
  <div class="grid grid-2 grid-4">
    <ProductCard v-for="p in products" :key="p.id" :product="p" />
  </div>
</template>

<script setup lang="ts">
import type { Product } from '~/types/Product'

defineProps<{ products: Product[] }>()
</script>

<style scoped>
/* mobile: 2 colonnes comme ton visuel */
.grid {
  display: grid;
  gap: clamp(1.5rem, 4vw, 3rem);
  justify-items: center; /* 👈 CLÉ ABSOLUE */
}

/* mobile : 2 colonnes */
.grid-2 {
  grid-template-columns: repeat(2, 1fr);
}

/* desktop : 3 colonnes MAX (visuellement plus élégant) */
@media (min-width: 900px) {
  .grid-4 {
    grid-template-columns: repeat(3, 1fr);
  }
}


</style>
