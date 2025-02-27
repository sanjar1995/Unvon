<template>
    <div>
        <Upcoming />
        <About />
        <Team />
        <Collection />
        <Action />
        <Events />
    </div>
</template>

<script setup>
const homeStore = useHomeStore();
const langStore = useLangStore()
const currentLang = computed(() => useLangStore().currentLang);



const fetchFooterData = async () => {
    const {data} = await $fetch(`${import.meta.env.VITE_URL + currentLang.value}/home`);
    homeStore.setHomeData(data);

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