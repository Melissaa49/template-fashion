import { ref, computed } from 'vue'

export type CartItem = {
  id: string
  title: string
  price: number
  image: string
  qty: number
}

const cart = ref<CartItem[]>([])

export function useCart() {

  const addToCart = (product: Omit<CartItem, 'qty'>) => {
    const item = cart.value.find(i => i.id === product.id)

    if (item) {
      item.qty++
    } else {
      cart.value.push({ ...product, qty: 1 })
    }
  }

  const increase = (id: string) => {
    const item = cart.value.find(i => i.id === id)
    if (item) item.qty++
  }

  const decrease = (id: string) => {
    const item = cart.value.find(i => i.id === id)
    if (!item) return

    if (item.qty > 1) {
      item.qty--
    } else {
      cart.value = cart.value.filter(i => i.id !== id)
    }
  }

  const itemsCount = computed(() =>
    cart.value.reduce((sum, i) => sum + i.qty, 0)
  )

  return {
    cart,
    addToCart,
    increase,
    decrease,
    itemsCount
  }
}
