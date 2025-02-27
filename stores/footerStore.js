import { defineStore } from 'pinia';

export const useFooterStore = defineStore('footerStore', {
  state: () => ({
    data: {},
  }),
  actions: {
    getData(data){
      this.data = data
    }
  },
  getters: {
    footerData: (state) => {
      return state.data
    },
  },
});