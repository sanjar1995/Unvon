<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__top">
        <h2 class="footer__title title">{{data.footer_title}}</h2>
        <ul class="footer__icons">
          <li>
            <a href="" class="footer__icons-link"
              ><img src="@/assets/images/telegram.svg" alt=""
            /></a>
          </li>
          <li>
            <a href="" class="footer__icons-link"
              ><img src="@/assets/images/instagram.svg" alt=""
            /></a>
          </li>
          <li>
            <a href="" class="footer__icons-link"
              ><img src="@/assets/images/whatsap.svg" alt=""
            /></a>
          </li>
        </ul>
      </div>
      <div class="footer__middle">
        <div class="footer__contact">
          <h3>{{$t('footer-subtitle')}}</h3>
          <a :href="`mailto:${data.email}`"
            ><img
              src="@/assets/images/footer-email.svg"
              alt=""
            />{{data.email}}</a
          >
          <a :href="`tel:${data.phone}`"
            ><img src="@/assets/images/footer-call.svg" alt="" />{{data.phone}}</a
          >
        </div>
        <div class="footer__address mobile">
          <div>
            <h3>{{$t('address')}}</h3>
            <p>
              {{data.address}}
            </p>
          </div>
        </div>
        <ul class="footer__icons">
          <li>
            <a :href="data.telegram" class="footer__icons-link"
              ><img src="@/assets/images/telegram.svg" alt=""
            /></a>
          </li>
          <li>
            <a :href="data.instagram" class="footer__icons-link"
              ><img src="@/assets/images/instagram.svg" alt=""
            /></a>
          </li>
          <li>
            <a :href="data.whatsapp" class="footer__icons-link"
              ><img src="@/assets/images/whatsap.svg" alt=""
            /></a>
          </li>
        </ul>
        <nav class="footer__navigation">
          <h3>{{$t("navigation")}}</h3>
          <ul>
            <li><nuxtLink to="/">{{$t('main')}}</nuxtLink></li>
            <li><nuxtLink to="/about">{{$t('about')}}</nuxtLink></li>
            <li><nuxtLink to="/team">{{$t('team')}}</nuxtLink></li>
            <li><nuxtLink to="/catalog">{{$t('catalog')}}</nuxtLink></li>
            <li><nuxtLink to="/contact">{{$t('contact')}}</nuxtLink></li>
          </ul>
        </nav>
      </div>
      <div class="footer__address">
        <div>
          <h3>{{$t('address')}}</h3>
          <p>{{data.address}}
          </p>
        </div>
        <nuxtLink to="/" class="footer__logo"
          ><img src="@/assets/images/logo.svg" alt=""
        /></nuxtLink>
      </div>
      <div class="footer__bottom">
        <nuxtLink to="/" class="footer__logo mobile"
          ><img src="@/assets/images/logo.svg" alt=""
        /></nuxtLink>
        <p>{{$t('footer-descr')}}</p>
        <a href="https://icorp.uz/web"
          ><svg
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_42_213)">
              <path
                d="M5.75942 11H3.99621L4.91287 7.33333H3.01858C2.83551 7.33326 2.655 7.29036 2.49147 7.20808C2.32793 7.12579 2.18591 7.00639 2.07676 6.85942C1.9676 6.71246 1.89433 6.54199 1.86281 6.36166C1.83129 6.18132 1.84238 5.99612 1.89521 5.82083L3.65567 0H7.99471L6.61971 3.66667H8.46358C8.67337 3.6668 8.8792 3.72378 9.0592 3.83154C9.23919 3.9393 9.38662 4.09382 9.48582 4.27867C9.58502 4.46353 9.63227 4.67181 9.62256 4.88137C9.61285 5.09093 9.54653 5.29395 9.43067 5.46883L5.75942 11Z"
                fill="#FFC380"
              />
            </g>
            <defs>
              <clipPath id="clip0_42_213">
                <rect width="11" height="11" fill="white" />
              </clipPath>
            </defs>
          </svg>{{ $t("footer-descr-2") }}</a
        >
      </div>
    </div>
  </footer>
</template>

<script setup>
// const {t} = useI18n()
const props = defineProps({
  data:Object
})
</script>

<style lang="scss" scoped></style>
