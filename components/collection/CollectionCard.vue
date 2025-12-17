<template>
  <NuxtLink :to="to" class="collection-card">
    <div class="arch">
      <img :src="image" :alt="title" />
    </div>
    <h3 class="name">{{ title }}</h3>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  image: string
  to: string
}>()
</script>

<style scoped>
.collection-card {
  text-align: center;
  text-decoration: none;
  color: inherit;
}

.arch {
  aspect-ratio: 3 / 4;
  border-radius: 200px 200px 24px 24px;
  overflow: hidden;
  background: var(--section-2);
}

.arch img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.name {
  margin-top: .8rem;
  font-size: .95rem;
}
</style>
