import { defineStore } from 'pinia';

export const useLangStore = defineStore('langStore', {
  state: () => ({
    currentLang: 'ru',
  }),
  actions: {
    setLang(lang) {
      this.currentLang = lang;
      localStorage.setItem('lang', lang);
    },
    loadLang() {
      const lang = localStorage.getItem('lang');
      if (lang) {
        this.currentLang = lang;
      }
    },
  },
  
  
});