import { defineStore } from 'pinia';

export const useAboutStore = defineStore('aboutStore', {
    state: () => ({
        aboutData: {},
    }),
    actions: {
        setAboutData(data) {
            this.aboutData = data;
        },
    },
    getters: {
        rewardsData: (state) => {
            return state.aboutData
        },
    },
});


