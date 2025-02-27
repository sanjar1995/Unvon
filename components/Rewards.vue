<script setup>
const aboutStore = useAboutStore();
const aboutData = computed(()=> aboutStore.aboutData);

</script>

<template>
  <div class="rewards">
    <div class="container">
      <div class="rewards__top">
        <p class="subtitle rewards__subtitle">
          {{$t('rewards-subtitle')}}
        </p>
        <h2 class="title rewards__title">
          <span>Fayz Rewards</span> – {{$t("rewards-title")}}
        </h2>
        <p class="rewards__top-text">
         {{ aboutData.text }}
        </p>
      </div>
      <div class="rewards__benefits">
        <h2 class="rewards__benefits-title">{{ aboutData.advantages_title }}</h2>
        <ul class="rewards__list">
          <li class="rewards__list-item" v-for="(item, index) in aboutData.advantages_text" :key="index">
            <img src="@/assets/images/check.svg" alt="" /><span
              >{{ item }}</span
            >
          </li>
        </ul>
      </div>
      <div class="rewards__benefits">
        <h2 class="rewards__benefits-title">{{ aboutData.company_numbers_title }}</h2>
        <ul class="rewards__list">
          <li class="rewards__list-item" v-for="(item, index) in aboutData.company_numbers_text" :key="index">
            <img src="@/assets/images/check.svg" alt="" /><span
              >{{ item }}</span
            >
          </li>
        </ul>
      </div>
      <div class="rewards__text">
    {{aboutData.subtext}}
      </div>
    </div>
    <img src="@/assets/images/about-page-bg-mobile.png" alt="" class="rewards__img">
  </div>
</template>



<style lang="scss" scoped></style>
