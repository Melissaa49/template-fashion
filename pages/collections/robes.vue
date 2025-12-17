<template>
  <!-- ===================== -->
  <!-- HERO COLLECTION -->
  <!-- ===================== -->
  <WaveSection
    centerColor="var(--section)"
    topColor="var(--bg)"
    bottomColor="var(--bg)"
  >
    <div class="container hero-scene">
      <!-- TEXTE -->
      <div class="hero-text">
        <span class="brand">Tendance</span>

        <h1 class="hero-title">Robes</h1>

        <p class="hero-sub">
          Des coupes fluides, pensées pour accompagner chaque mouvement.
        </p>
      </div>

      <!-- IMAGE -->
      <div class="hero-arch">
        <img src="/images/gallery-1.png" alt="Robes" />
      </div>
    </div>
  </WaveSection>
   <div class="filters-wrapper">
        <ProductFilters v-model="filter" />
      </div>
  <!-- ===================== -->
  <!-- FILTRES + PRODUITS -->
  <!-- ===================== -->
  <WaveSection
    centerColor="var(--section)"
    bottomColor="var(--bg)"
  >
    <div class="container">
          <!-- PRODUITS -->
      <div class="product-grid">
        <ProductCard
          v-for="p in filtered"
          :key="p.id"
          :product="p"
        />
      </div>
    </div>
  </WaveSection>

  <!-- ===================== -->
  <!-- BLOC ÉDITORIAL (SANS VAGUE) -->
  <!-- ===================== -->
  <section class="editorial-section">
    <div class="container editorial">
      <div class="editorial-image">
        <img src="/images/gallery-9.png" alt="Editorial" />
      </div>

      <div class="editorial-text">
        <h2>
          Pensées pour les journées douces<br />
          et les soirées lentes.
        </h2>
      </div>
    </div>
  </section>
</template>


<script setup lang="ts">
import { ref, computed } from "vue"
import WaveSection from "~/components/ui/WaveSection.vue"
import ProductFilters from "~/components/product/ProductFilters.vue"
import ProductCard from "~/components/product/ProductCard.vue"
import type { Product } from "~/types/Product"

const filter = ref("Toutes")

const products: Product[] = [
  { id: "1", title: "Robe élégante", price: 99, image: "/images/gallery-10.png", tags: ["Toutes"] },
  { id: "2", title: "Robe en lin", price: 129, image: "/images/gallery-2.png", tags: ["Lin"] },
  { id: "3", title: "Robe plissée", price: 119, image: "/images/gallery-3.png", tags: ["Toutes"] },
  { id: "4", title: "Robe satinée", price: 89, image: "/images/gallery-4.png", tags: ["Soie"] },
]

const filtered = computed(() => {
  if (filter.value === "Toutes") return products
  return products.filter(p => p.tags?.includes(filter.value))
})
</script>

<style scoped>
/* ===================== */
/* HERO COLLECTION */
/* ===================== */

.collection-hero {
  position: relative;
  padding-top: 3rem;
  padding-bottom: 7rem;
}

/* TEXTE */
.hero-text {
  position: relative;
  z-index: 2;
  max-width: 42ch;
}

.brand {
  font-size: .85rem;
  opacity: .65;
}
.hero-scene {
  position: relative;
  min-height: 520px;
  padding-top: 3rem;
}

.hero-text {
  position: relative;
  z-index: 2;
  max-width: 26ch;
}

.hero-arch {
  position: absolute;
  bottom: 2.2rem;
  left: 65%;
  transform: translateX(-50%);
  width: min(250px, 65vw);
  border-radius: 240px 240px 24px 24px;
  overflow: hidden;
  background: var(--section-2);
  z-index: 1;
}

.hero-arch img {
  width: 100%;
  display: block;
}

.hero-title {
  font-size: clamp(2.6rem, 7vw, 3.6rem);
  line-height: 1.05;
  margin: .6rem 0 .8rem;
}

.hero-desc {
  font-size: 1rem;
  line-height: 1.55;
  max-width: 38ch;
}

/* IMAGE HERO — MOBILE (IDENTIQUE HOME) */
.hero-image {
  position: absolute;
  top: 1rem;
  left: 65%;
  transform: translateX(-50%);
  width: min(250px, 65vw);
  border-radius: 999px 999px 36px 36px;
  overflow: hidden;
  background: var(--section-2);
  z-index: 1;
}

.hero-image img {
  width: 100%;
  display: block;
}

/* ===================== */
/* FILTRES */
/* ===================== */

.filters-container {
  display: flex;
  justify-content: center;
  padding: .6rem 0 .8rem;
}

/* composant interne */
:deep(.filters) {
  display: flex;
  gap: .75rem;
  flex-wrap: nowrap;
  white-space: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  padding: .3rem .8rem;
}

:deep(.filters::-webkit-scrollbar) {
  display: none;
}

:deep(.filter-btn) {
  flex: 0 0 auto;
}

/* ===================== */
/* PRODUITS */
/* ===================== */

.product-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.8rem 1.2rem;
}

/* ===================== */
/* BLOC ÉDITORIAL */
/* ===================== */

.editorial {
  display: grid;
  gap: 1.8rem;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 2.6rem;
}

.editorial-image {
  width: min(560px, 92vw);
  margin: 0 auto;
  border-radius: 42px;
  overflow: hidden;
  background: #e7d6c4;
  box-shadow: 0 18px 55px rgba(0,0,0,.08);
}

.editorial-image img {
  width: 100%;
  display: block;
}

.editorial-text {
  text-align: center;
}

.editorial-text h2 {
  font-size: clamp(1.8rem, 5.4vw, 2.4rem);
  line-height: 1.15;
  margin: 0;
}
:deep(.filters),
:deep(.filter-btn),
:deep(.filter-btn button),
:deep(.filter-btn a) {
  color: #000;
}

/* ===================== */
/* DESKTOP */
/* ===================== */

@media (min-width: 900px) {
  .collection-hero {
    display: grid;
    grid-template-columns: 1.05fr .95fr;
    align-items: center;
    padding-bottom: 2.6rem;
  }
.hero-scene {
    min-height: 640px;
    padding-top: 4rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }

  .hero-arch {
    position: relative;
    width: 100%;
    max-width: 420px;
    margin-left: auto;
    border-radius: 240px 240px 32px 32px;
    overflow: hidden;
    background: var(--section-2);
  }
  .hero-image {
    position: relative;
    top: auto;
    left: auto;
    transform: none;
    margin-left: auto;
    width: min(560px, 100%);
    border-radius: 999px 999px 40px 40px;
  }

 .filters-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 2.5rem;
}

/* ===================== */
/* PRODUITS */
/* ===================== */

.product-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.8rem 1.2rem;
}

@media (min-width: 900px) {
  .product-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 2.2rem 1.6rem;
  }
}

/* ===================== */
/* ÉDITORIAL FINAL */
/* ===================== */

.editorial-section {
  background: var(--section);
  padding: 4rem 0;
}

.editorial {
  display: grid;
  gap: 2.5rem;
  align-items: center;
}

.editorial-image {
  border-radius: 42px;
  overflow: hidden;
}

.editorial-text h2 {
  font-size: clamp(1.8rem, 3vw, 2.4rem);
}
}
</style>
