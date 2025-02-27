<template>
  <label class="checkbox">
    <input type="checkbox" hidden/>
    <img
      src="@/assets/images/not-checked.svg"
      alt=""
      class="products__filters-check"
    />
    <img
      src="@/assets/images/checkbox.svg"
      alt=""
      class="products__filters-check checked"
    />
    <span class="checkbox-name"><slot/></span>
    <span class="checkbox-count" v-if="count">({{ count }})</span>
  </label>
</template>

<script setup>
const props = defineProps({
    count:{
        type:Number
    }
}) 
</script>

<style lang="scss" scoped></style>
