export const useLanguageStore = defineStore('language', {
  state: (): { code: string } => {
    return { code: 'th' }
  },
  getters: {
    language(state) {
      return state.code
    },
  },
  actions: {
    setLanguageCode(code: string) {
      this.code = code
    },
    getLanguage() {
      return this.code
    },
  },
  persist: {
    storage: localStorage,
  },
})
