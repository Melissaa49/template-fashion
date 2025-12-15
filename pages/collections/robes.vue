<template>
  <WaveSection color="var(--section)">
    <div class="container top">
      <div class="left">
        <h1 class="page-title">Robes</h1>
        <p>Des coupes fluides, pensées pour accompagner chaque mouvement.</p>

        <ProductFilters v-model="filter" />
      </div>

      <div class="right">
        <div class="hero-arch">
          <img src="/images/gallery-1.jpeg" alt="Robe beige" />
        </div>
      </div>
    </div>
  </WaveSection>

  <WaveSection color="var(--bg)">
    <div class="container">
      <ProductGrid :products="filtered" />
    </div>
  </WaveSection>

  <WaveSection color="var(--section-2)">
    <div class="container quote">
      <h2 class="section-title">Pensée pour les journées douces<br/>et les soirées lentes</h2>
    </div>
  </WaveSection>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import WaveSection from '~/components/ui/WaveSection.vue'
import ProductFilters from '~/components/product/ProductFilters.vue'
import ProductGrid from '~/components/product/ProductGrid.vue'
import type { Product } from '~/components/product/ProductCard.vue'

const filter = ref('Toutes')

const products: Product[] = [
  { id:'1', title:'Robe portefeuille', price: 99, image:'/images/gallery-1.jpeg', tags:['Toutes'] },
  { id:'2', title:'Robe en lin', price: 129, image:'/images/gallery-1.jpeg', tags:['Lin'] },
  { id:'3', title:'Robe plissée', price: 119, image:'/images/gallery-1.jpeg', tags:['Toutes'] },
  { id:'4', title:'Robe satinée', price: 89, image:'/images/gallery-1.jpeg', tags:['Soie'] },
]

const filtered = computed(() => {
  if (filter.value === 'Toutes') return products
  return products.filter(p => (p.tags || []).includes(filter.value))
})
</script>

<style scoped>
.top{
  display:grid;
  gap: 2.5rem;
  align-items:center;
}

.left p{
  margin-top: 1rem;
  max-width: 36ch;
}

.hero-arch{
  width: min(440px, 92vw);
  border-radius: 240px 240px 24px 24px;
  overflow:hidden;
  background:#e7d6c4;
}

.hero-arch img{
  width:100%;
  display:block;
}

@media(min-width: 900px){
  .top{
    grid-template-columns: 1.1fr .9fr;
  }
  .right{
    display:flex;
    justify-content:flex-end;
  }
}

.quote{
  text-align:center;
}
</style>
