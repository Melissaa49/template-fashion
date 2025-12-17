import { ref } from 'vue'

const isCartOpen = ref(false)

export function useCartUI() {
  const openCart = () => {
    isCartOpen.value = true
  }

  const closeCart = () => {
    isCartOpen.value = false
  }

  return {
    isCartOpen,
    openCart,
    closeCart
  }
}
