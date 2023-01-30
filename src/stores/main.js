import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    list: []
  }),
  actions: {
    addValue () {
      this.list.push(crypto.randomUUID())
    }
  },
  persist: {
    key: 'test-pinia-indexDB-cache'
  }
})
