<template>
    <div class="about-page">
        <UIBreadCrumbs />
        <Rewards />
    </div>
</template>

<script setup>
const aboutStore = useAboutStore();
const langStore = useLangStore()
const currentLang = computed(() => useLangStore().currentLang);

const fetchFooterData = async () => {
    const {data} = await $fetch(`${import.meta.env.VITE_URL + currentLang.value}/about`);
    aboutStore.setAboutData(data);
}
onMounted(() => {
    fetchFooterData()
    langStore.loadLang()
})
watch(() => currentLang.value, (newLang) => {
    fetchFooterData()
})
</script>

<style lang="scss" scoped></style>