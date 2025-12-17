<template>
  <NuxtLayout>
    <NuxtPage />
    <Toast />

    <!-- PANIER GLOBAL -->
    <CartDrawer
      :open="isCartOpen"
      @close="closeCart"
    />
  </NuxtLayout>
</template>

<script setup lang="ts">
import Toast from '~/components/ui/Toast.vue'
import CartDrawer from '~/components/cart/CartDrawer.vue'
import { useCartUI } from '~/composables/useCartUI'

const { isCartOpen, closeCart } = useCartUI()

useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
    }
  ]
})
</script>
