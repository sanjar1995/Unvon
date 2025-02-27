import { defineStore } from 'pinia';

export const useProductsStore = defineStore('productsStore', {
    state: () => ({
        productsData: [],
        page:1,
        count:0
    }),
    actions: {
        setProductsdata(data) {
            this.productsData = data;
            this.page = data.page
            this.count = data.count
        },
        changePage(page){
            this.page = page           
        }
    },
    getters: {
        products: (state) => {
            return state.productsData?.data || [];
        },
    },
});


