<script setup>
const langStore = useLangStore();
const currentLang = computed(() => langStore.currentLang);

const { data: users } = useAsyncData(
  'teams',
  () => $fetch(`${import.meta.env.VITE_URL + currentLang.value}/teams`),
  { watch: [currentLang] } // Обновляет данные при смене языка
);
</script>

<template>
  <div class="teams container" v-if="users">
    <div class="teams__top">
      <span class="teams__top-subtitle subtitle">{{$t("employees")}}</span>
      <h3 class="teams__top-title title">{{$t("our-team")}}</h3>
    </div>
    <div class="teams__content">
      <nuxtLink v-for="item in users.data" :key="item.id" :to="`/team/${item.id}`" class="teams__item">
        <img :src="item.image" alt="" class="teams__img">
        <h3 class="teams__name">{{ item.name }}</h3>
        <p class="teams__position">{{ item.position }}</p>
      </nuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
