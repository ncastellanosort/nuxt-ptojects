<script setup>
import ClotheCard from "~/components/ClotheCard.vue";

const route = useRoute();

definePageMeta({
  layout: "products",
});

const { data } = await useFetch(
  `https://fakestoreapi.com/products/${route.params.id}`
);

// post

/*

const { data } = await useFetch(`api/backend/`. {
    method: 'post',
    body: {
        age: 18
    }
})

*/
</script>
<template>
  <div class="flex justify-center">
    <ClotheCard
      :key="data.id"
      :id="data.id"
      :title="data.title"
      :price="data.price"
      :description="data.description"
      :category="data.category"
      :image="data.image"
      :rate="data.rating.rate"
      :count="data.rating.count"
    />
  </div>
</template>

<style lang="scss" scoped></style>
