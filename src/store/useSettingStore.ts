import { defineStore } from 'pinia'

export const useSettingStore = defineStore('setting', {
  state: () => ({
    timezone: localStorage.getItem('timezone') || null,
  }),
  actions: {
    setTimezone(value: string) {
      this.timezone = value
      localStorage.setItem('timezone', value)
    },
    clearTimezone() {
      this.timezone = null
      localStorage.removeItem('timezone')
    },
  },
  getters: {
    getTimezone(): string | null {
      return this.timezone
    },
  },
})
