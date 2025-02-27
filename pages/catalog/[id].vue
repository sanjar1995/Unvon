<template>
  <div class="product" v-if="product">
    <UIBreadCrumbs data="Bycicle trophy" />
    <div class="container">
      <div class="product__top">
        <div class="product__top-images">
          <img v-for="(image, index) in product.data.images" :src="image" :key="index" alt=""
            class="product__top-img" />
        </div>
        <div class="product__top-description">
          <span class="product__top-subtitle subtitle">ID: {{ product.data.article }}</span>
          <h1 class="product__top-title title">{{ product.data.name }}</h1>
          <span class="subtitle">{{ $t("description") }}</span>
          <p class="product__top-text">
            {{ product.data.description }}
          </p>
          <button class="product__top-btn btn" @click="modal = true">{{ $t("check_availability") }}</button>
        </div>
      </div>
      <div class="product__bottom">
        <h2 class="product__bottom-title">{{ $t("specifications") }}</h2>
        <div class="product__bottom-info">
          <ul class="characteristics">
            <li class="characteristics-item" v-for="(item, index) in product.data.params" :key="index">
              <span class="characteristics-type">{{item.characteristic_key}}</span>
              <span class="characteristics-line"></span>
              <span class="characteristics-value">{{item.value}}</span>
            </li>
        </ul>
        </div>
      </div>
    </div>
  </div>
  
  <client-only>
    <Modal v-if="product" :modal="modal" @closeModal="modal = false"
    :productInfo="{ articul: product.data.article, name: product.data.name }" />
  </client-only>
</template>


<!-- <script setup>
const { id } = useRoute().params;
const modal = ref(false);
const product = ref({});
const langStore = useLangStore()
const currentLang = computed(() => langStore.currentLang);
async function getProduct(){
  const {data} = await $fetch(`${import.meta.env.VITE_URL+ currentLang.value}/products/${id}`);
  product.value = data;
}
onMounted(() => {
  getProduct()
})

watch(() => currentLang.value, (newLang) => {
  getProduct()
})
</script> -->
<script setup>
const route = useRoute();
const { id } = route.params;
const modal = ref(false); // Добавляем ref для modal
const langStore = useLangStore();
const currentLang = computed(() => langStore.currentLang);

const { data: product, refresh } = useFetch(() => `${import.meta.env.VITE_URL}${currentLang.value}/products/${id}`, {
  watch: [currentLang], // Перезапрашиваем данные при изменении языка
});
</script>
<style lang="scss" scoped></style>
