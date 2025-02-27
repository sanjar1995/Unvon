import { defineStore } from 'pinia';

export const useHomeStore = defineStore('homeStore', {
    state: () => ({
        homeData: {},
    }),
    actions: {
        setHomeData(data) {
            this.homeData = data;
        },
    },
    getters: {
        upcomingData: (state) => {
            return {
                title: state.homeData?.title || '',
                upcoming_banner: state.homeData?.upcoming_banner || '',
                typeImage: state.homeData?.upcoming_image || '',
            }
        },
        aboutData: (state) => {
            return {
                about_numbers: state.homeData?.about_numbers || '',
                about_text: state.homeData?.about_text || '',
                about_title: state.homeData?.about_title || '',
            }
        },
        teamData:(state) => {
            return {
                team_title: state.homeData?.team_title || '',
                team: state.homeData?.specialists || [],
            }
        },
        collectionData:(state) => {
            return {
                title: state.homeData?.collection_title || '',
                text: state.homeData?.collection_text || '',
                images: state.homeData?.collection_images || [],
            }
        },
        eventData:(state) => {
            return {
                title: state.homeData?.events_title || '',
                events: state.homeData?.events || [],
            }
        },
    },
});


