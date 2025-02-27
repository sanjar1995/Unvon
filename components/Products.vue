<template>

  <div class="products" @click="openOrCloseFilter('close')">
    <div class="products__top">
      <div class="products__top-desc">
        <p class="products__top-text subtitle">{{ $t("our-projects") }}</p>
        <h2 class="title products__top-title">{{ $t("products") }}</h2>
      </div>
      <form action="" class="products__form">
        <input type="text" class="products__search" :placeholder="$t('search-product')" v-model="searchQuery" @input="emit('searchQuery', searchQuery)"/>
      </form>
    </div>
    <div v-if="filterMenu" class="fixed z-[999] top-0 left-0 w-full h-full bg-black opacity-45"
      @click="filterMenu = false"></div>
    <button class="filter-menu" @click.stop="openOrCloseFilter('open')">
      <img src="@/assets/images/filter.svg" alt="" /><span>Фильтр</span>
    </button>
    <div class="products__bottom">
      <div class="products__filters" :class="{ active: filterMenu }" @click.stop>
        <div class="products__filters-top" v-if="filterMenu">
          <h2 class="products__filters-top-title">Фильтры</h2>
          <button class="products__filter-top-close" @click="openOrCloseFilter('close')">
            <img src="@/assets/images/circle-close.svg" alt="" />
          </button>
        </div>
        <h2 class="products__filters-title">{{$t("categories")}}</h2>
        <Filter :lang="langStore.currentLang" v-if="true" />
        <div class="products__filters-form">
          <div class="flex flex-col gap-4">
            <UICheckbox @input="onInput($event, item)" :count="item.products_count"
              v-for="(item, index) in filterStore.getCategories" :key="index">{{ item.name[langStore.currentLang] }}
            </UICheckbox>
          </div>
          <div class="products__filters-wrapper" v-for="(item, index) in getCharacteristics" :key="index">
            <h2 class="products__filters-subtitle">{{ item.name[langStore.currentLang] }}</h2>
            <ul class="products__filters-list" :class="{active:activeParam.includes(item.name[langStore.currentLang])}">
              <li v-for="(filter, i) in item.params[langStore.currentLang]" :key="i">
                <UICheckbox :count="filter.count" @input="onParams($event, filter)">
                  {{ filter.value }}
                </UICheckbox>
              </li>
            </ul>
            <button v-if="item.params[langStore.currentLang].length > 4" @click="seeMore(item.name[langStore.currentLang])" class="products__filters-btn">{{activeParam.includes(item.name[langStore.currentLang]) ? $t("see-less") : $t("see-more")}}</button>
          </div>

        </div>
      </div>
      <div class="products__bottom-wrapper flex-grow">
        <div class="products__content">
          <ProductsItem v-for="(product, index) in products" :key="index" :product="product" />
        </div>
        <UPagination :active-button="{ variant: 'outline' }" v-model="page" :page-count="2" :max="max"
          :total="allpage + 1" class="flex justify-center mt-24 products__pagination gap-2" />

      </div>
    </div>
  </div>
</template>

<script setup>
const activeParam = ref([])
const seeMore = (name)=>{
  if(activeParam.value.includes(name)){
    activeParam.value = activeParam.value.filter(item=>item !== name)
    return
  }else{
    activeParam.value.push(name)
  }
};
const seeLess = (name)=>{
  activeParam.value = activeParam.value.filter(item=>item !== name)
};
const productsStore = useProductsStore();
const filterStore = useFilterStore();
const langStore = useLangStore();
const products = computed(() => productsStore.products)
const allpage = computed(() => productsStore.productsData.pages_count)
const getCharacteristics = computed(() => filterStore.getCharacteristics)
const page = ref(1)
const max = computed(() => windowWidth > 575 ? 7 : 5)
const filterMenu = ref(false);
const searchQuery = ref('');
const windowWidth = ref(0);
const emit = defineEmits(['pageChange, searchQuery']);
const showAll = ref(false);

// Показываем либо все характеристики, либо только первые 4
const visibleCharacteristics = computed(() => 
  showAll.value ? getCharacteristics.value : getCharacteristics.value.slice(0, 4)
);
function onInput(e, item) {
  let inputStatus = e.target.checked;
  filterStore.setInput(e.target);
  if (inputStatus) {
    filterStore.setSelectedfilters(item);
  } else {
    filterStore.removeFilter(item, langStore.currentLang);
  }
}
function onParams(event, item) {
  filterStore.addOrRemoveParams(event.target, item); 
}
const updateWidth = () => {
  windowWidth.value = window.innerWidth;
}
onMounted(() => {
  updateWidth();
  window.addEventListener("resize", updateWidth);
});
const openOrCloseFilter = (data) => {
  if (data === "open") {
    filterMenu.value = true;
    document.body.style.overflow = "hidden";
  } else {
    filterMenu.value = false;
    document.body.style.overflow = "visible";
  }
};

watch(page, (newPage) => {
  emit('pageChange', newPage);
});
</script>

<style lang="scss" scoped></style>




