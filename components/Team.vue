<template>
  <div class="team">
    <div class="container">
      <div class="team__top">
        <p class="team__subtitle subtitle">{{t('team-subtitle')}}</p>
        <h2 class="team__title title">{{teamData.team_title}}</h2>
      </div>
      <div class="team__buttons">
        <nuxtLink to="/team" class="team__link link"> {{ t('team-btn') }}  <svg
            width="12"
            height="11"
            viewBox="0 0 12 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.3795 3.99768L8.13108 0.749268L7.1295 1.75085L10.1484 4.77048L-5 4.79173V6.20839L10.1909 6.18714L7.12879 9.24927L8.13037 10.2509L11.3795 7.00243C11.7767 6.6033 11.9996 6.06313 11.9996 5.50006C11.9996 4.93699 11.7767 4.39682 11.3795 3.99768Z"
              fill="#FFC380"
            />
          </svg></nuxtLink>
        <div class="team__buttons-wrapper">
          <button class="team__buttons-prev prev">
            <img src="@/assets/images/arrow-next.svg" alt="" />
          </button>
          <button class="team__buttons-next">
            <img src="@/assets/images/arrow-next.svg" alt="" />
          </button>
        </div>
      </div>
      <swiper
      spaceBetween="20"
        :breakpoints="options"
        :navigation="{
          nextEl: '.team__buttons-next',
          prevEl: '.team__buttons-prev',
        }"
        :slidesPerView="4"
        :modules="modules"
        class="mySwiper team__swiper"
      >
        <swiper-slide
          class="team__slide"
          v-for="(item, index) in teamData.team"
          :key="index"
        >
        <nuxt-link to="teams/2">
          <img
            :src="item.image"
            alt=""
            class="team__slide-img"
          />
          <h3 class="team__slide-title">{{ item.name }}</h3>
          <p class="team__slide-subtitle">{{item.position}}</p>
          
        </nuxt-link>
         
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup>
import { useSwiper } from "swiper/vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
const {t} = useI18n()
const modules = ref([Navigation]);
const homeStore = useHomeStore();
const teamData = computed(() => homeStore.teamData);
const options = {
  320: {
    slidesPerView: 1,
  },
  500:{
    slidesPerView: 2,
  },
  876:{
    slidesPerView: 3,
  },
  1170:{
    slidesPerView: 4,
  }
};
</script>

<style lang="scss" scoped></style>
