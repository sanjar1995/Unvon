<template>
  <header class="header" :class="{ active: headerTop }">
    <div class="header__top">
      <div class="container">
        <a :href="`mailto:${data.email}`" class="header__top-email"
          ><img src="@/assets/images/email.svg" alt="" /><span
            >{{ data.email }}</span
          ></a
        >

        <div class="header__top-right">
          <ul class="header__top-list">
            <li><img src="@/assets/images/phone.svg" alt="" /></li>
            <li v-for="(item, index) in data.phone" :key="index">
              <a :href="`tel:${item}`" class="header__top-link"
                >{{item}}</a
              >
            </li>
            <li class="line"></li>
          </ul>
          <ul class="header__top-icons">
            <li>
              <a :href="data.telegram" class="header__top-icon"
                ><img src="@/assets/images/telegram.svg" alt=""
              /></a>
            </li>
            <li>
              <a :href="data.instagram" class="header__top-icon"
                ><img src="@/assets/images/instagram.svg" alt=""
              /></a>
            </li>
            <li>
              <a :href="data.whatsapp" class="header__top-icon"
                ><img src="@/assets/images/whatsap.svg" alt=""
              /></a>
            </li>
          </ul>
          <ul class="header__top-lang">
            <li v-for="(item, index) in lang" :key="index">
              <button
                @click="changeLang(item,index)"
                class="header__top-lang__item"
                :class="{ active: locale === item }"
              >
                {{ item }}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <nav class="header__nav">
      <div class="container">
        <nuxtLink to="/" class="logo"
          ><img src="@/assets/images/logo.svg" alt=""
        /></nuxtLink>
        <div class="flex gap-6">
          <ul class="header__top-lang mobile" @click.stop>
            <li v-for="(item, index) in lang" :key="index">
              <button
                @click="changeLang(item,index)"
                class="header__top-lang__item"
                :class="{ active: locale === item }"
              >
                {{ item }}
              </button>
            </li>
          </ul>
          <button
            class="menu"
            :class="{ active: menu }"
            @click.stop="menu = !menu"
          >
            <span></span>
          </button>
        </div>
        <!-- <div class="fixed top-0 left-0 w-full h-full bg-black opacity-45" @click="menu = false" v-if="menu"></div> -->
        <ul class="header__nav-list" :class="{ active: menu }">
          <li v-for="(link, index) in links" :key="index">
            <nuxt-link
              @click="menu = false"
              :to="link.url"
              class="header__nav-link"
              >{{ link.name }}</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              @click="menu = false"
              to="/contact"
              class="header__nav-btn btn"
              >{{t('contact')}}</nuxt-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup>
const {currentLang, setLang} = useLangStore()
const props = defineProps({
  data:Object
})
const { t, locale } = useI18n();
const menu = ref(false);
const links = computed(() => [
  {
    url: "/",
    name: t("main"),
  },
  {
    url: "/about",
    name: t("about"),
  },
  {
    url: "/team",
    name: t("team"),
  },
  {
    url: "/catalog",
    name: t("catalog"),
  },
]);
function changeLang(item,index){
  setLocale(item)
  langActive.value = index
  localStorage.lang = item
  setLang(item)
}
const headerTop = ref(false);
const langActive = ref(1);
const lang = ref(["uz", "ru"]);
const { setLocale } = useI18n()


onMounted(() => {
  const updateScroll = () => {
    if (window.scrollY > 20) {
      headerTop.value = true;
    } else {
      headerTop.value = false;
    }
  };
  if (process.client) {
    window.addEventListener("scroll", updateScroll);
  }

  onUnmounted(() => {
    if (process.client) {
      window.removeEventListener("scroll", updateScroll);
    }
  });
});
</script>

<style lang="scss" scoped></style>
