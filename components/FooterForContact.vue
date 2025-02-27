<template>
  <footer class="footer-contact container">
    <div class="footer-contact__top">
      <h1 class="footer-contact__title">{{data.footer_title}}</h1>
      <div class="footer-contact__navigation">
        <h2 class="subtitle footer-contact__subtitle">{{ $t('navigation') }}</h2>
        <ul class="footer-contact__list">
          <nuxt-link to="/">{{$t('main')}}</nuxt-link>
          <nuxt-link to="/about">{{$t('about')}}</nuxt-link>
          <nuxt-link to="/team">{{$t('team')}}</nuxt-link>
          <nuxt-link to="/catalog">{{$t('catalog')}}</nuxt-link>
          <nuxt-link to="/contact">{{$t('contact')}}</nuxt-link>
        </ul>
      </div>
    </div>
    <div class="footer-contact__middle">
      <ul class="footer-contact__icons">
        <li>
          <a :href="data.telegram" class="footer-contact__icon">
            <img src="@/assets/images/telegram.svg" alt="" />
          </a>
        </li>
        <li>
          
          <a :href="data.instagram" class="footer-contact__icon">
            <img src="@/assets/images/instagram.svg" alt="" />
          </a>
        </li>
        <li>
          <a :href="data.whatsapp" class="footer-contact__icon">
            <img src="@/assets/images/whatsap.svg" alt="" />
          </a>
        </li>
      </ul>
      <nuxtLink to="/" class="footer__logo"
        ><img src="@/assets/images/logo.svg" alt=""
      /></nuxtLink>
    </div>
    <div class="footer-contact__bottom">
      <p class="footer-contact__text">{{ $t("footer-descr") }}</p>
      <p class="footer-contact__author">
        <svg
          width="11"
          height="11"
          viewBox="0 0 11 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.75984 11H3.99663L4.9133 7.33333H3.01901C2.83594 7.33326 2.65543 7.29036 2.49189 7.20808C2.32836 7.12579 2.18634 7.00639 2.07718 6.85942C1.96803 6.71246 1.89476 6.54199 1.86324 6.36166C1.83171 6.18132 1.84281 5.99612 1.89563 5.82083L3.65609 0H7.99513L6.62013 3.66667H8.46401C8.6738 3.6668 8.87963 3.72378 9.05962 3.83154C9.23962 3.9393 9.38705 4.09382 9.48625 4.27867C9.58544 4.46353 9.6327 4.67181 9.62299 4.88137C9.61327 5.09093 9.54696 5.29395 9.43109 5.46883L5.75984 11Z"
            fill="#FFC380"
          />
        </svg>
        
      {{$t('footer-descr-2')}}
      </p>
    </div>
  </footer>
</template>

<script setup>
const props = defineProps({
  data:Object
})
</script>

<style lang="scss" scoped>

</style>
