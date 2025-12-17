<template>
  <header class="header">
    <div class="container header-inner">
      <div class="brand">Mode Élégante</div>

      <nav class="nav">
        <NuxtLink to="/">Accueil</NuxtLink>
        <NuxtLink to="/collections/robes">Collections</NuxtLink>
        <NuxtLink to="#">À propos</NuxtLink>
        <NuxtLink to="#">Contact</NuxtLink>
      </nav>

      <!-- Actions droite -->
      <div class="actions">
        <!-- Panier -->
       <button
  class="cart-btn"
  aria-label="Panier"
  @click="openCart"
>
  <i class="fa-solid fa-bag-shopping"></i>

  <span v-if="itemsCount > 0" class="cart-badge">
    {{ itemsCount }}
  </span>
</button>




        <!-- Burger -->
        <button class="burger" @click="open = true" aria-label="Ouvrir le menu">
          ☰
        </button>
      </div>
    </div>

    <MobileMenu :open="open" @close="open = false" />
  </header>
</template>

<script setup lang="ts">
import MobileMenu from './MobileMenu.vue'
import { ref } from 'vue'
import { useCart } from '@/composables/useCart'
import { useCartUI } from '@/composables/useCartUI'

const open = ref(false)
const { itemsCount } = useCart()
const { openCart } = useCartUI()
</script>


<style scoped>
.header {
  padding: 1.2rem 0;
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand {
  font-family: "Playfair Display", serif;
  font-size: 1.3rem;
}

.nav {
  display: none;
  gap: 2rem;
  font-size: .95rem;
}

/* Actions droite */
.actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.cart-btn {
  position: relative;
  background: none;
  border: 0;
  font-size: 1.3rem;
  cursor: pointer;
}

.cart-badge {
  position: absolute;
  top: -6px;
  right: -8px;
  background: #000;
  color: #fff;
  font-size: .65rem;
  padding: 2px 6px;
  border-radius: 999px;
}

.burger {
  border: 0;
  background: transparent;
  font-size: 1.6rem;
  cursor: pointer;
}

@media (min-width: 900px) {
  .nav { display: flex; }
  .burger { display: none; }
}
</style>
