<template>
  <Transition name="slide">
    <aside v-if="open" class="drawer">
      <!-- HEADER -->
      <header class="drawer-header">
        <h2>Votre panier</h2>

        <button
          class="close-btn"
          type="button"
          aria-label="Fermer"
          @click="$emit('close')"
        >
          <span></span>
          <span></span>
        </button>
      </header>

      <!-- CONTENT -->
      <div class="content">
        <p v-if="cart.length === 0" class="empty">
          Votre panier est vide
        </p>

        <div v-else class="items">
          <article
            v-for="item in cart"
            :key="item.id"
            class="item"
          >
            <img :src="item.image" :alt="item.title" />

            <div class="info">
              <strong>{{ item.title }}</strong>
              <span class="price">{{ item.price }} €</span>

              <div class="qty">
                <button @click="decrease(item.id)">−</button>
                <span>{{ item.qty }}</span>
                <button @click="increase(item.id)">+</button>
              </div>
            </div>
          </article>
        </div>
      </div>

      <!-- FOOTER -->
      <footer v-if="cart.length > 0" class="drawer-footer">
        <NuxtLink
          to="/panier"
          class="go-cart"
          @click="$emit('close')"
        >
          Voir mon panier
        </NuxtLink>
      </footer>
    </aside>
  </Transition>
</template>

<script setup lang="ts">
import { useCart } from '~/composables/useCart'

defineProps<{ open: boolean }>()
defineEmits(['close'])

const { cart, increase, decrease } = useCart()
</script>

<style scoped>
/* CONTAINER */
.drawer {
  position: fixed;
  inset: 0 0 0 auto;
  width: min(400px, 92vw);
  height: 100vh;
  background: linear-gradient(180deg, var(--bg), #fff);
  display: flex;
  flex-direction: column;
  z-index: 1000;
  box-shadow: -24px 0 48px rgba(0,0,0,.12);
}

/* HEADER */
.drawer-header {
  padding: 1.8rem 1.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.drawer-header h2 {
  font-size: 1.25rem;
  font-weight: 500;
}

/* CLOSE BUTTON */
.close-btn {
  position: relative;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 1px solid rgba(0,0,0,.12);
  background: #fff;
  cursor: pointer;
  transition: all .25s ease;
}

.close-btn span {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 14px;
  height: 1.5px;
  background: #000;
}

.close-btn span:first-child {
  transform: translate(-50%, -50%) rotate(45deg);
}

.close-btn span:last-child {
  transform: translate(-50%, -50%) rotate(-45deg);
}

.close-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 18px rgba(0,0,0,.15);
}

/* CONTENT */
.content {
  flex: 1;
  overflow-y: auto;
  padding: 0 1.6rem;
}

.empty {
  margin-top: 3rem;
  text-align: center;
  opacity: .6;
}

.items {
  display: grid;
  gap: 1.6rem;
}

/* ITEM */
.item {
  display: grid;
  grid-template-columns: 72px 1fr;
  gap: 1.2rem;
  padding-bottom: 1.4rem;
  border-bottom: 1px solid rgba(0,0,0,.06);
}

.item img {
  width: 100%;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  border-radius: 16px;
}

/* INFO */
.info strong {
  display: block;
  font-weight: 500;
}

.price {
  display: block;
  margin-top: .25rem;
  font-size: .95rem;
}

/* QTY */
.qty {
  margin-top: .6rem;
  display: inline-flex;
  align-items: center;
  gap: .6rem;
  padding: .35rem .7rem;
  border-radius: 999px;
  border: 1px solid var(--text);
  background: #fff;
  font-size: .75rem;
  box-shadow: 0 4px 14px rgba(0,0,0,.05);
}

.qty button {
  background: none;
  border: none;
  font-size: .9rem;
  cursor: pointer;
}

/* FOOTER */
.drawer-footer {
  padding: 1.6rem;
  border-top: 1px solid rgba(0,0,0,.08);
}

.go-cart {
  display: block;
  width: 100%;
  padding: .9rem;
  text-align: center;
  border-radius: 999px;
  border: 1px solid var(--text);
  font-weight: 500;
  background: #fff;
}
</style>
