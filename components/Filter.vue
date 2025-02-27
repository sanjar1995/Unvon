<template>
  <div class="products__filter" v-if="filterStore.selectedfilters.length > 0 || filterStore.params.length > 0">
    <button class="products__filter-reset" @click="filterStore.removeAllFilters()">Сбросить фильтр</button>
    <div class="products__filter-content">
      <div class="products__filter-item" v-for="(item, index) in filterStore.selectedfilters" :key="index">
        <span class="products__filter-name">{{ item.name[lang] }}</span>
        <button class="products__filter-close" @click="filterStore.removeFilter(item, lang)">
          <img src="@/assets/images/close.svg" alt="" />
        </button>
      </div>
      
      <div class="products__filter-item" v-for="(item, index) in filterStore.params" :key="index">
        <span class="products__filter-name">
          {{ item.data.value }}
        </span>
        <button class="products__filter-close" @click="item.input.checked = false,filterStore.addOrRemoveParams(item.input,item.data.value)">
          <img src="@/assets/images/close.svg" alt="" />
        </button>
      </div>
      
    </div>
  </div>
</template>

<script setup>
const filterStore = useFilterStore();
const props = defineProps({
  lang: String,
});
</script>

<style lang="scss" scoped></style>
