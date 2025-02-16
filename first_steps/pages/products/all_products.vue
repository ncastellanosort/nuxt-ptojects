<script setup>
import ClotheInfo from "~/components/ClotheInfo.vue";

definePageMeta({
  layout: "products",
});

const { data } = await useFetch("/api/backend");
</script>
<template>
  <div class="flex justify-center my-4">
    <h1 class="text-4xl">Products</h1>
  </div>
  <div class="flex justify-center flex-wrap">
    <div v-for="product in data" :key="product.id" class="m-4">
      <ClotheInfo
        :key="product.id"
        :id="product.id"
        :title="product.title"
        :price="product.price"
        :url_image="product.image"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
