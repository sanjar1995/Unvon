<template>
  <div class="collection">
    <div class="container">
      <div class="collection__descr">
        <div class="collection__descr-top">
          <p class="subtitle collection__subtitle">{{t('collection-subtitle')}}</p>
          <h2 class="title collection__title">{{collectionData.title}}</h2>
        </div>
        <div class="collection__buttons">
          <div class="collection__buttons-wrapper">
            <button class="collection__buttons-prev prev">
              <img src="@/assets/images/arrow-next.svg" alt="" />
            </button>
            <button class="collection__buttons-next">
              <img src="@/assets/images/arrow-next.svg" alt="" />
            </button>
          </div>
          <div class="collection__text" v-html="collectionData.text"></div>
          <nuxtLink to="/catalog" class="collection__link link"
            >{{t('collection-btn')}}  <svg
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
          </svg></nuxtLink
          >
        </div>
      </div>
      <swiper :breakpoints="breakpoints" spaceBetween="20" :navigation="{
          nextEl: '.collection__buttons-next',
          prevEl: '.collection__buttons-prev',
        }" :modules="modules" class="mySwiper collection__swiper">
        <swiper-slide class="collection__slide" v-for="(item, index) in collectionData.images" :key="index">
            <img :src="item" alt="" class="collection__slide-img">
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup>

const homeStore = useHomeStore();
const collectionData = computed(()=>homeStore.collectionData)
import { useSwiper } from "swiper/vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
const {t} = useI18n()
const breakpoints = {
  320:{
    slidesPerView:1.5
  },
  450:{
    slidesPerView:2
  }
}
const modules = ref([Navigation]);</script>

<style lang="scss" scoped></style>
