<template>
  <!-- ===================== -->
  <!-- HERO (2 VAGUES) -->
  <!-- ===================== -->
  <WaveSection
    centerColor="var(--section)"
    topColor="var(--bg)"
    bottomColor="var(--bg)"
  >
    <div class="container hero">
      <div class="hero-left">
        <h1 class="page-title">
          Nouvelle<br />
          collection
        </h1>

        <p class="hero-text">
          Découvrez les dernières tendances de la saison
        </p>

        <a class="link" href="/collections/robes">
          Découvrir →
        </a>
      </div>

      <div class="hero-right">
        <div class="hero-arch">
          <img
            src="/images/gallery-1.jpeg"
            alt="Robe beige"
          />
        </div>
      </div>
    </div>
  </WaveSection>

  <!-- ===================== -->
  <!-- COLLECTIONS POPULAIRES -->
  <!-- (PAS DE VAGUE) -->
  <!-- ===================== -->
  <WaveSection centerColor="var(--bg)">
    <div class="container">
      <SectionTitle>
        Collections populaires
      </SectionTitle>

      <ProductGrid :products="popular" />
    </div>
  </WaveSection>

  <!-- ===================== -->
  <!-- NEWSLETTER -->
  <!-- (TRANSITION DOUCE) -->
  <!-- ===================== -->
  <WaveSection
    centerColor="var(--section-2)"
    topColor="var(--bg)"
  >
    <NewsletterForm />
  </WaveSection>
</template>

<script setup lang="ts">
import WaveSection from '~/components/ui/WaveSection.vue'
import SectionTitle from '~/components/ui/SectionTitle.vue'
import ProductGrid from '~/components/product/ProductGrid.vue'
import NewsletterForm from '~/components/newsletter/NewsletterForm.vue'
import type { Product } from '~/components/product/ProductCard.vue'

const popular: Product[] = [
  {
    id: '1',
    title: 'Turtnek',
    price: 0,
    image: '/images/gallery-1.jpeg',
  },
  {
    id: '2',
    title: 'Callorces',
    price: 0,
    image: '/images/gallery-1.jpeg',
  },
  {
    id: '3',
    title: 'Satines',
    price: 0,
    image: '/images/gallery-1.jpeg',
  },
]
</script>

<style scoped>
/* ===================== */
/* HERO */
/* ===================== */

.hero {
  display: grid;
  gap: 2.5rem;
  align-items: center;
}

.hero-text {
  margin-top: 1rem;
  max-width: 28ch;
}

.hero-right {
  display: flex;
  justify-content: flex-end;
}

.hero-arch {
  width: min(420px, 90vw);
  border-radius: 240px 240px 24px 24px;
  overflow: hidden;
  background: #e7d6c4;
}

.hero-arch img {
  width: 100%;
  display: block;
}

/* ===================== */
/* DESKTOP */
/* ===================== */

@media (min-width: 900px) {
  .hero {
    grid-template-columns: 1.1fr 0.9fr;
  }
}
</style>
