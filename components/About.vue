<template>
  <div class="about" ref="targetElement">
    <div class="container">
      <div class="about__descr">
        <div class="about__descr-top">
          <p class="about__descr-subtitle subtitle">
            {{t('about-subtitle')}}
          </p>
          <h2 class="about__descr-title title">
            {{aboutData.about_title}}
          </h2>
        </div>
        <div class="about__descr-text">
          {{aboutData.about_text}}
        </div>
        <nuxtLink to="/about" class="about__descr-link link"
          >{{t('about-btn')}}
          <svg
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
          </svg>
        </nuxtLink>
        <div class="about__numbers" v-if="show">
          <div class="about__numbers-item" v-for="(item) in aboutData.about_numbers">
            <h3 class="about__numbers-title">
              <client-only>
                <UIAnimateNumbers :from="0" :to="item.number" :duration="1000" />
              </client-only>
            </h3>
            <p class="about__numbers-subtitle">{{item.text }}</p>
          </div>
          <!-- <div class="about__numbers-item">
            <h3 class="about__numbers-title">
              <client-only>
                <UIAnimateNumbers
                  :from="0"
                  :to="8000"
                  :duration="1000"
                /> </client-only
              >+
            </h3>
            <p class="about__numbers-subtitle">{{t('about-clients')}}</p>
          </div>
          <div class="about__numbers-item">
            <h3 class="about__numbers-title">
              <client-only>
                <UIAnimateNumbers
                  :from="0"
                  :to="1000"
                  :duration="1000"
                /> </client-only
              >+
            </h3>
            <p class="about__numbers-subtitle">{{t('product-name')}}</p>
          </div>
          <div class="about__numbers-item">
            <h3 class="about__numbers-title">
              <client-only>
                <UIAnimateNumbers
                  :from="0"
                  :to="50"
                  :duration="1000"
                /> </client-only
              >+
            </h3>
            <p class="about__numbers-subtitle">{{t('exp-specialsits')}}</p>
          </div> -->
        </div>
      </div>
    </div>
    <img src="@/assets/images/about-cup.png" alt="" class="about__img">
  </div>
</template>

<script setup>
const homeStore = useHomeStore();
const aboutData = computed(() => homeStore.aboutData);
import { onMounted, onUnmounted, ref } from "vue";

const {t} = useI18n()
const targetElement = ref(null);
let observer;
let show = ref(false);

const handleIntersection = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && !show.value) {
      show.value = true;
      // Ваш код, который должен выполняться при достижении элемента
      if (observer) {
        observer.disconnect();
      }
    }
  });
};

onMounted(() => {
  observer = new IntersectionObserver(handleIntersection, {
    root: null,
    threshold: 0.10,
  });

  if (targetElement.value) {
    observer.observe(targetElement.value);
  }
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<style lang="scss" scoped></style>
