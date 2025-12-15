<template>
  <transition name="fade">
    <div v-if="open" class="overlay" @click.self="$emit('close')">
      <div class="panel">
        <button class="close" @click="$emit('close')" aria-label="Fermer">✕</button>

        <nav class="links">
          <NuxtLink to="/" @click="$emit('close')">Accueil</NuxtLink>
          <NuxtLink to="/collections/robes" @click="$emit('close')">Collections</NuxtLink>
          <NuxtLink to="#" @click="$emit('close')">À propos</NuxtLink>
          <NuxtLink to="#" @click="$emit('close')">Contact</NuxtLink>
        </nav>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
defineProps<{ open: boolean }>()
defineEmits<{ (e:'close'): void }>()
</script>

<style scoped>
.overlay{
  position:fixed;
  inset:0;
  background: rgba(0,0,0,.25);
  display:flex;
  justify-content:flex-end;
  z-index: 50;
}

.panel{
  width: min(320px, 85vw);
  height: 100%;
  background: var(--bg);
  padding: 1.5rem;
  box-shadow: -20px 0 60px rgba(0,0,0,.12);
}

.close{
  border:0;
  background:transparent;
  font-size: 1.2rem;
  cursor:pointer;
}

.links{
  margin-top: 2rem;
  display:flex;
  flex-direction:column;
  gap: 1.2rem;
  font-family: "Playfair Display", serif;
  font-size: 1.3rem;
}

.fade-enter-active, .fade-leave-active{ transition: opacity .18s ease; }
.fade-enter-from, .fade-leave-to{ opacity: 0; }
</style>
