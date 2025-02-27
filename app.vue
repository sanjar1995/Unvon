<template>
  <div class="wrapper">
    <Header :data="headerData" />
    <NuxtPage /> 
    <Footer :data="footerData" v-if="route.path !== '/contact' || windowWidth <= 650" />
    <FooterForContact :data="footerData" v-else />
  </div>
</template>
<script setup>
const footerStore = useFooterStore()
const data = computed(()=>footerStore.data)
const lang = ref('ru')
const { locale } = useI18n()
if (process.client) {
  lang.value = localStorage.getItem('lang') || 'ru'
}
const headerData = computed(() => {
  return {
    email: data.value?.data?.mail,
    phone: [data.value?.data?.phone_top_1, data.value?.data?.phone_top_2,],
    telegram: data.value?.data?.telegram,
    instagram: data.value?.data?.instagram,
    whatsapp: data.value?.data?.whatsapp,
  }
})
const footerData = computed(() => {
  return {
    phone: data.value?.data?.phone_footer,
    footer_title: data.value?.data?.footer_title,
    address: data.value?.data?.address,
    telegram: data.value?.data?.telegram,
    instagram: data.value?.data?.instagram,
    whatsapp: data.value?.data?.whatsapp,
    email: data.value?.data?.mail,
  }
})
const route = useRoute();
const windowWidth = ref(0);
const { setLocale } = useI18n()
const updateWidth = () => {
  windowWidth.value = window.innerWidth
}
const fetchFooterData = async () => {
  const response = await $fetch(`${import.meta.env.VITE_URL + lang.value}/footer`);
  footerStore.getData(response)
}
onMounted(() => {
  windowWidth.value = window.innerWidth;
  window.addEventListener("resize", updateWidth);
  let localLang = localStorage.lang
  setLocale(localLang || 'ru')
  lang.value = localLang
  fetchFooterData()
});
watch(() => locale.value, (newLang) => {
  lang.value = newLang
  fetchFooterData()
})
</script>
