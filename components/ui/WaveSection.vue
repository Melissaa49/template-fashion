<template>
  <section class="wave-section" :style="{ background: centerColor }">
    <!-- VAGUE DU HAUT -->
    <svg
      v-if="topColor"
      class="wave wave-top"
      viewBox="0 0 1440 500"
      preserveAspectRatio="none"
    >
      <path
        d="
          M0,260
          C180,200 360,140 540,160
          C760,185 900,300 1140,260
          C1280,235 1360,225 1440,240
          L1440,0
          L0,0
          Z
        "
        :fill="topColor"
      />
    </svg>

    <!-- CONTENU -->
    <div class="content">
      <slot />
    </div>

    <!-- VAGUE DU BAS -->
    <svg
      v-if="bottomColor"
      class="wave wave-bottom"
      viewBox="0 0 1440 500"
      preserveAspectRatio="none"
    >
      <path
        d="
          M0,240
          C180,300 360,360 540,340
          C760,315 900,200 1140,240
          C1280,265 1360,275 1440,260
          L1440,500
          L0,500
          Z
        "
        :fill="bottomColor"
      />
    </svg>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  centerColor: string
  topColor?: string
  bottomColor?: string
}>()
</script>

<style scoped>
.wave-section {
  position: relative;
  overflow: hidden;
}

/* VAGUES */
.wave {
  position: absolute;
  left: 0;
  width: 100%;
  height: 420px;
  z-index: 0;
}

.wave-top {
  top: 0;
}

.wave-bottom {
  bottom: 0;
}

/* CONTENU */
.content {
  position: relative;
  z-index: 1;
  padding: clamp(6rem, 12vw, 9rem) 0;
}
</style>
