<template>
  <article class="card">
    <div class="arch">
      <img :src="product.image" :alt="product.title" />
    </div>

    <h3 class="title">{{ product.title }}</h3>

    <div class="bottom">
      <span class="price">{{ product.price }} €</span>

      <div class="actions">
        <button
          v-if="qty === 0"
          class="btn-add"
          type="button"
          @click="add"
        >
          Ajouter
        </button>

        <div v-else class="qty">
          <button @click="onDecrease">−</button>
          <span>{{ qty }}</span>
          <button @click="onIncrease">+</button>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useCart } from '~/composables/useCart'
import type { Product } from '~/types/Product'

const props = defineProps<{ product: Product }>()
const { addToCart, cart, increase, decrease } = useCart()

const qty = computed(() => {
  const item = cart.value.find(i => i.id === props.product.id)
  return item?.qty ?? 0
})

const add = () => addToCart(props.product)
const onIncrease = () => increase(props.product.id)
const onDecrease = () => decrease(props.product.id)
</script>

<style scoped>
.card {
  max-width: 320px;
  text-align: center;
}

.arch {
  aspect-ratio: 3 / 4;
  border-radius: 260px 260px 32px 32px;
  overflow: hidden;
  background: var(--section-2);
}

.arch img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.title {
  margin-top: 1rem;
  font-size: 1.15rem;
}

.bottom {
  margin-top: .6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.price {
  font-size: 1.05rem;
  font-weight: 600;
}

.btn-add {
  background: var(--primary);
  color: #fff;
  border: 0;
  padding: .35rem 1rem;
  border-radius: 999px;
  font-size: .65rem;
  text-transform: uppercase;
  letter-spacing: .12em;
}

.qty {
  display: flex;
  align-items: center;
  gap: .6rem;
  border: 1px solid var(--text);
  border-radius: 999px;
  padding: .25rem .6rem;
  font-size: .7rem;
}
</style>
