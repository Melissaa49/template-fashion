<template>
  <!-- ===================== -->
  <!-- HERO -->
  <!-- ===================== -->
  <WaveSection
    centerColor="var(--section)"
    topColor="var(--bg)"
    bottomColor="var(--bg)"
  >
    <div class="container hero-scene">
      <!-- TEXTE -->
      <div class="hero-text">
        <span class="brand">Mode Élégante</span>

        <h1 class="hero-title">
          Nouvelle<br />
          collection
        </h1>

        <p class="hero-sub">
          Découvrez les dernières tendances
        </p>

        <NuxtLink to="/collections/robes" class="hero-link">
          Découvrir →
        </NuxtLink>
      </div>

      <!-- IMAGE -->
      <div class="hero-arch">
        <img
          src="/images/gallery-3.png"
          alt="Nouvelle collection"
        />
      </div>
    </div>
  </WaveSection>

  <!-- ===================== -->
  <!-- COLLECTIONS -->
  <!-- ===================== -->
  <WaveSection centerColor="var(--bg)">
    <div class="container">
      <h2 class="section-title">
        Collections populaires
      </h2>

      <div class="collections">
        <NuxtLink to="/collections/robes" class="collection-card">
          <div class="arch">
            <img src="/images/gallery-6.png" alt="Robes" />
          </div>
          <span>Combinaison</span>
        </NuxtLink>

        <NuxtLink to="/collections/robes" class="collection-card">
          <div class="arch">
            <img src="/images/gallery-1.png" alt="Turtleneck" />
          </div>
          <span>Robes</span>
        </NuxtLink>

        <NuxtLink to="/collections/robes" class="collection-card">
          <div class="arch">
            <img src="/images/gallery-7.png" alt="Satines" />
          </div>
          <span>Veste</span>
        </NuxtLink>

          <NuxtLink to="/collections/robes" class="collection-card">
          <div class="arch">
            <img src="/images/gallery-8.png" alt="Robes" />
          </div>
          <span>Ensemble</span>
        </NuxtLink>
      </div>
    </div>
  </WaveSection>

  <!-- ===================== -->
  <!-- NEWSLETTER -->
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
import NewsletterForm from '~/components/newsletter/NewsletterForm.vue'
</script>

<style scoped>
/* ================================================= */
/* HERO — MOBILE FIRST (corrigé)                     */
/* ================================================= */

.hero-scene {
  position: relative;
  min-height: 520px;     /* ✔ mobile plus compact */
  padding-top: 3rem;
}

/* TEXTE */
.hero-text {
  position: relative;
  z-index: 2;
  max-width: 26ch;
}

.brand {
  font-size: .8rem;
  opacity: .6;
}

.hero-title {
  font-size: clamp(2.4rem, 7vw, 3.6rem);
  line-height: 1.05;
  margin-top: .6rem;
}

.hero-sub {
  margin-top: .8rem;
  max-width: 24ch;
}

.hero-link {
  display: inline-block;
  margin-top: 1.2rem;
  font-weight: 500;
}

/* IMAGE — MOBILE */
.hero-arch {
  position: absolute;
  bottom: 2.2rem;              /* ✔ image remontée */
  left: 65%;
  transform: translateX(-50%);
  width: min(250px, 65vw);     /* ✔ image plus présente */
  border-radius: 240px 240px 24px 24px;
  overflow: hidden;
  background: var(--section-2);
  z-index: 1;
}

.hero-arch img {
  width: 100%;
  display: block;
}

/* ================================================= */
/* DESKTOP — STRICTEMENT INCHANGÉ                    */
/* ================================================= */

@media (min-width: 900px) {
  .hero-scene {
    min-height: 640px;
    padding-top: 4rem;
  }

  .hero-arch {
     width: 100%;
    max-width: 420px;
    margin-left: auto;
    border-radius: 240px 240px 32px 32px;
    overflow: hidden;
    background: #e7d6c4;
  }
}

/* ================================================= */
/* COLLECTIONS                                      */
/* ================================================= */

.collections {
  display: grid;
  gap: 1.6rem;
  margin-top: 2.2rem;
}

.collection-card {
  text-align: center;
  text-decoration: none;
  color: inherit;
}

.collection-card .arch {
  aspect-ratio: 3 / 4;
  border-radius: 200px 200px 24px 24px;
  overflow: hidden;
  background: var(--section-2);
}

.collection-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.collection-card span {
  display: block;
  margin-top: .8rem;
  font-size: .95rem;
}

/* MOBILE — plus grands, plus hauts */
@media (max-width: 899px) {
  .collections {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.8rem;
  }

  .collection-card .arch {
    border-radius: 180px 180px 22px 22px;
  }
}

/* DESKTOP */
@media (min-width: 900px) {
  .collections {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
