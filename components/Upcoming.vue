<template>
  <div class="upcoming">
    <img
    v-if="upcomingData.typeImage"
      :src="upcomingData.upcoming_banner"
      alt=""
      class="upcoming-banner"
    />
    <video v-else :src="upcomingData.upcoming_banner"   class="upcoming-banner"></video>
    <div class="upcoming-descr container">
      <p class="upcoming-subtitle">
        <img src="@/assets/images/star-icon.svg" alt="" />FAYZ REWARDS
      </p>
      <h1 class="upcoming-title">{{t('upcoming-title')}} <span>{{t('upcoming-title-2')}}</span>
      </h1>
    </div>
  </div>
</template>

<script setup>
const { t } = useI18n();
const homeStore = useHomeStore();
const upcomingData = computed(() => homeStore.upcomingData);
</script>

<style lang="scss" scoped></style>
