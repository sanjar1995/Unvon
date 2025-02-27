<template>
  <div class="container">
    <ul aria-label="breadcrumb" class="breadcrumbs">
      <li
        v-for="(crumb, index) in breadcrumbs"
        :key="index"
        class="breadcrumbs__link"
      >
        <template v-if="!crumb.active">
          <NuxtLink :to="crumb.path"> {{ crumb.label }} / </NuxtLink>
        </template>
        <template v-else>
          <span>{{ crumb.label }}</span>
        </template>
      </li>
    </ul>
  </div>
</template>

<script setup>
const { t, te } = useI18n();
const route = useRoute();
const props = defineProps({
  data:{
    type:[String, Boolean],
    default:false
  }
})
const breadcrumbs = computed(()=>route.path
  .split("/")
  .reduce((acc, segment, index, array) => {
    const path = index === 0 ? '/' + array.slice(0, index + 1).join("/") : array.slice(0, index + 1).join("/")
    if(!isNaN(segment) && props.data && segment != ''){
      segment = props.data
    }
    acc.push({
      label: te(segment) ? t(segment) : t('main'), 
      path,
      active: index === array.length - 1, 
    });
    return acc;
  }, []))
</script>
