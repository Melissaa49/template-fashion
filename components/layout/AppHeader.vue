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

      <button class="burger" @click="open = true" aria-label="Ouvrir le menu">
        ☰
      </button>
    </div>

    <MobileMenu :open="open" @close="open = false" />
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MobileMenu from './MobileMenu.vue'

const open = ref(false)
</script>

<style scoped>
.header{
  padding: 1.2rem 0;
}

.header-inner{
  display:flex;
  align-items:center;
  justify-content:space-between;
}

.brand{
  font-family: "Playfair Display", serif;
  font-size: 1.3rem;
}

.nav{
  display:none;
  gap: 2rem;
  font-size: .95rem;
}

.burger{
  border:0;
  background:transparent;
  font-size: 1.6rem;
  cursor:pointer;
}

@media(min-width: 900px){
  .nav{ display:flex; }
  .burger{ display:none; }
}
</style>
