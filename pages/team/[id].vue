<script setup>
const langStore = useLangStore();
const currentLang = computed(() => langStore.currentLang);
const route = useRoute();
const { id } = route.params;
const { data: user, refresh } = useFetch(() => `${import.meta.env.VITE_URL}${currentLang.value}/teams/${id}`, {
  key: `team-${currentLang.value}-${id}`, // Ключ кеша
  watch: [currentLang], // Следим за изменениями
});

</script>

<template>
  <div class="current-teams" v-if="user">
    <UIBreadCrumbs :data="user?.name" />
    <div class="container">
      <div class="current-teams__content">
        <div class="current-teams__img">
          <img :src="user.data?.image" alt="" />
        </div>
        <div class="current-teams__descr">
          <div class="current-teams__top">
            <span class="current-teams__top-subtitle subtitle">{{ user.data?.position }}</span>
            <h3 class="current-teams__top-title title">{{ user.data?.name }}</h3>
          </div>
          <p class="current-teams__text">{{ user.data?.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
