export const useUserStore = defineStore('user', () => {
  const state = ref('')
  return {
    state,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
