<template>
  <article class="card">
    <div class="arch">
      <img :src="product.image" :alt="product.title" />
    </div>

    <h3 class="title">{{ product.title }}</h3>
    <div class="price">{{ product.price }} €</div>
  </article>
</template>

<script setup lang="ts">
export type Product = {
  id: string
  title: string
  price: number
  image: string
  tags?: string[]
}

defineProps<{ product: Product }>()
</script>

<style scoped>
.card{
  text-align:left;
   max-width: 320px;
}

.arch {
  aspect-ratio: 3 / 4;
  border-radius: 260px 260px 32px 32px;
  overflow: hidden;
  background: #e7d6c4;
}

.arch img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}


.title{
  margin-top: 1rem;
  font-size: 1.15rem;
  text-align: center;
}

.price{
  margin-top: .35rem;
  color: var(--text-soft);
  text-align: center;
}
</style>
