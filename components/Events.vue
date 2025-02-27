<template>
  <div class="events">
    <div class="container">
      <div class="events__content">
        <div class="events__top">
          <p class="events__subtitle subtitle">{{ t("event-subtitle") }}</p>
          <h2 class="events__title title">{{ t("event-title") }}</h2>
        </div>
        <div class="events__buttons">
          <button class="events__buttons-prev prev">
            <img src="@/assets/images/arrow-next.svg" alt="" />
          </button>
          <button class="events__buttons-next">
            <img src="@/assets/images/arrow-next.svg" alt="" />
          </button>
        </div>
        <swiper :slidesPerView="1" class="mySwiper" :modules="[Controller, EffectFade, Navigation]"
          @swiper="setControlledSwiper" :effect="'fade'" :navigation="{
            nextEl: '.events__buttons-next',
            prevEl: '.events__buttons-prev',
          }">
          <swiper-slide v-for="(item, index) in eventData.events" :key="index">
            <div class="events__descr">
              <h3 class="events__descr-title">{{ item.title }}</h3>
              <!-- <p class="events__descr-text"></p> -->
              <div v-html="item.description"></div>
            </div>
          </swiper-slide>
        </swiper>

        <nuxtLink to="/contact" class="events__link link">{{ t('event-btn') }} <svg width="12" height="11"
            viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.3795 3.99768L8.13108 0.749268L7.1295 1.75085L10.1484 4.77048L-5 4.79173V6.20839L10.1909 6.18714L7.12879 9.24927L8.13037 10.2509L11.3795 7.00243C11.7767 6.6033 11.9996 6.06313 11.9996 5.50006C11.9996 4.93699 11.7767 4.39682 11.3795 3.99768Z"
              fill="#FFC380" />
          </svg></nuxtLink>
      </div>
        <swiper
        :breakpoints="options"
        :navigation="{
          nextEl: '.events__buttons-next',
          prevEl: '.events__buttons-prev',
        }"
        spaceBetween="20"
        :modules="[Controller, Navigation]"
        :controller="{ control: controlledSwiper }"
        class="mySwiper events__swiper"
      >
        <swiper-slide
          class="collection__slide"
          v-for="(item, index) in eventData.events"
          :key="index"
        >
          <img
            :src="item.image"
            alt=""
            class="collection__slide-img"
          />
        </swiper-slide>
      </swiper>
      </div>
   
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Controller, EffectFade } from "swiper/modules";
const homeStore = useHomeStore();
const eventData = computed(() => homeStore.eventData);
import "swiper/css/effect-fade";
import "swiper/css";
const { t } = useI18n()
const slides = ref([
  {
    title: "DMP SPEED GAMES",
    description:
      "Черпая вдохновение в искусстве и современных трендах дизайна, мы создаем нестандартные персонализированные продукты: трофеи, медали, небольшие гаджеты и подарки. Мы любим амбициозные проеованнрованные продукты: трофеи, медали, небольшие гаджеты и подарки. Мы любим амбициозные проеованнрованные продукты: трофеи, медали, небольшие гаджеты и подарки. Мы любим амбициозные проеованные продукты: трофеи, медали, небольшие гаджеты и подарки. Мы любим амбициозные проеованные продукты: трофеи, медали, небольшие гаджеты и подарки. Мы любим амбициозные проекты, неожиданные сочетания и дизайн премиум-класса.",
    link: "#",
    image: "/events-img.png",
  },
  {
    title: "Another Event",
    description:
      "Описание второго слайда. Здесь можно указать другую информацию.",
    link: "#",
    image: "/events-img.png",
  },
  {
    title: "Third Event",
    description: "Описание третьего слайда.",
    link: "#",
    image: "/events-img.png",
  },
  {
    title: "Beshinchi event",
    description: "Описание третьего слайда.",
    link: "#",
    image: "/events-img.png",
  },
  {
    title: "Fifth Event",
    description: "Описание третьего слайда.",
    link: "#",
    image: "/events-img.png",
  },
]);
const options = {
  320: {
    slidesPerView: 1.5,
  },
  500: {
    slidesPerView: 2,
  },
  722: {
    slidesPerView: 3,
  },
};
const modules = ref([Controller, Navigation]);
const controlledSwiper = ref(null);

const setControlledSwiper = (swiper) => {
  controlledSwiper.value = swiper;
};
watch(controlledSwiper, (newSwiper) => {
  if (newSwiper) {
    newSwiper.update();
  }
});
</script>

<style lang="scss" scoped></style>
