<template>
    <nuxt-link :to="'/catalog/'+product.id" class="products__item">
        <img :src="product.image" alt="" class="products__item-img">
        <h3 class="products__item-name">{{product.name}}</h3>
        <p class="products__item-descr">ID:{{product.id}}</p>
    </nuxt-link>
</template>

<script setup>
const props = defineProps({
    product: Object,
});
</script>

<style lang="scss" scoped>

</style>