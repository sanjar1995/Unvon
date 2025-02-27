<template>
    <div class="action">
        <div class="container">
            <nuxtLink to="/contact" class="action__item">
                <img src="@/assets/images/action-1.png" alt="" class="action__item-img">
                <img src="@/assets/images/cup-icon.svg" alt="" class="action__item-icon">
                <h3 class="action__item-title">{{t("contact-us")}}</h3>
                <p class="action__item-subtitle">{{t("order-us")}}</p>
            </nuxtLink>
            <nuxtLink to="/catalog" class="action__item">
                <img src="@/assets/images/action-2.png" alt="" class="action__item-img">
                <img src="@/assets/images/star-icon.svg" alt="" class="action__item-icon">
                <h3 class="action__item-title">{{t("watch-projects")}}</h3>
                <p class="action__item-subtitle">{{t("out-produtcs")}}</p>
            </nuxtLink>
        </div>
    </div>
</template>

<script setup>
const {t} = useI18n()
</script>

<style lang="scss" scoped>

</style>