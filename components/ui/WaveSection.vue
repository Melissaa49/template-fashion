<template>
  <section class="wave-section" :style="{ background: centerColor }">
    <svg
      v-if="topColor"
      class="wave wave-top"
      viewBox="0 0 1440 500"
      preserveAspectRatio="none"
    >
      <path
        d="M0,260 C180,200 360,140 540,160 C760,185 900,300 1140,260 C1280,235 1360,225 1440,240 L1440,0 L0,0 Z"
        :fill="topColor"
      />
    </svg>

    <div class="content">
      <slot />
    </div>

    <svg
      v-if="bottomColor"
      class="wave wave-bottom"
      viewBox="0 0 1440 500"
      preserveAspectRatio="none"
    >
      <path
        d="M0,240 C180,300 360,360 540,340 C760,315 900,200 1140,240 C1280,265 1360,275 1440,260 L1440,500 L0,500 Z"
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

.wave {
  position: absolute;
  left: 0;
  width: 100%;
  height: 420px;
  z-index: 0;
}

.wave path {
  filter: drop-shadow(0 6px 12px rgba(0,0,0,0.08));
}

.wave-top {
  top: 0;
  height: 300px;
}

.wave-bottom {
  bottom: 0;
  height: 460px;
}


.content {
  position: relative;
  z-index: 1;
  padding: clamp(6rem, 12vw, 9rem) 0;
}
/* MOBILE ONLY */
@media (max-width: 899px) {
  .content {
    padding: 4rem 0; /* au lieu de 6–9rem */
  }

  .wave-bottom {
    height: 300px; /* vague du bas plus visible */
  }
}

</style>
