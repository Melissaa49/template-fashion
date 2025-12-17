import { ref } from 'vue'

const visible = ref(false)
const message = ref('')

export function useToast() {
  const show = (text: string) => {
    message.value = text
    visible.value = true

    setTimeout(() => {
      visible.value = false
    }, 2200)
  }

  return {
    visible,
    message,
    show
  }
}
