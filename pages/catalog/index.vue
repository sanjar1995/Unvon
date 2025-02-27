<template>
  <div class="catalog-page">
    <UIBreadCrumbs />
    <div class="container">
      <Products  v-if="productsStore.products.length"  @pageChange="productsStore.changePage($event)" @searchQuery="debouncedSearch"/>
    </div>
  </div>
</template>+
<script setup>
import debounce from 'lodash/debounce'

const productsStore = useProductsStore();
const langStore = useLangStore();
const filterStore = useFilterStore();
const page = computed(() => productsStore.page);
const searchQuery = ref('');
const fetchSearchResults = (query) => {
  console.log('Fetching results for:', query)
  searchQuery.value = query
  fetchFooterData()
}
const debouncedSearch = debounce(fetchSearchResults, 300)

const currentLang = computed(() => langStore.currentLang);
const selectedfilters = computed(() => filterStore.selectedfilters);
const params = computed(() => filterStore.params);

const fetchFooterData = async () => {  
  let filters = '';
  let param = '';
  if (selectedfilters.value.length > 0 || params.value.length > 0) {
    param = params.value.map(item => item.data.value).join(',');
    filters = selectedfilters.value.map(item => item.name[currentLang.value]).join(',');
  }
  let query = {};
  
  filters ? query.categories = filters : '';

  try {
    const data = await $fetch(`${import.meta.env.VITE_URL}${currentLang.value}/products`, {
      query: {
        ...query,
        page: page.value,
        params:param,
        search:searchQuery.value,
      },
    });
    const filter = await $fetch(`${import.meta.env.VITE_URL}${currentLang.value}/products/filter`);
    productsStore.setProductsdata(data);
    filterStore.setAllFilters(filter);
  } catch (error) {
    console.error("Ошибка загрузки продуктов:", error);
  }
};


onMounted(() => {
  fetchFooterData();
  langStore.loadLang();
});


watch(currentLang, fetchFooterData);
watch(page, fetchFooterData);
// watch(() => filterStore.selectedfilters, fetchFooterData, { deep: true });
watch(
  [() => selectedfilters.value, () => params.value],
  ([newFilters, newParams], [oldFilters, oldParams]) => {
    fetchFooterData();
  },
  { deep: true }
);

</script>



<style lang="scss" scoped></style>