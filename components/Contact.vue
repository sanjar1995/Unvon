<template>
  <div class="contact container flex items-start justify-between" v-if="!gratitude">
    <div class="contact__descr">
      <div class="contact__descr-top">
        <span class="contact__descr-subtitle subtitle">{{$t("employees")}}</span>
        <h3 class="contact__descr-title title">{{$t("our-team")}}</h3>
      </div>
      <div class="contact__descr-contact">
        <a href="mailto:fayzrewards.company@mail.ru"
          ><img src="@/assets/images/footer-email.svg" alt="" />fayzrewards.company@mail.ru</a
        ><a href="tel:+998882022017"><img src="@/assets/images/footer-call.svg" alt="" />+998 88 202-20-17</a>
      </div>
      <div class="contact__descr-address">
        <h3 class="subtitle contact__descr-address__subtitle">{{$t('address')}}</h3>
        <p> {{ $t("address-full") }}</p>
      </div>
    </div>
    <StepForm @gratitude="gratitude = !gratitude"/>
  </div>
  <div class="gratitude container" v-else>
    <div class="gratitude__descr">
      <p class="gratitude__subtitle subtitle">Заявка отправлена</p>
      <h2 class="gratitude__title">Спасибо!</h2>
      <p class="gratitude__text subtitle">Скоро мы с вами свяжемся.</p>
      <NuxtLink to="/" class="gratitude__btn btn">На главную</NuxtLink>
    </div>
    <div class="gratitude__img">
      <img src="@/assets/images/silver-cup.png" alt="">
    </div>
  </div>
</template>

<script setup>
const gratitude = ref(false)
</script>

<style lang="scss" scoped></style>
