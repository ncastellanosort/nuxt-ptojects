<script setup>
defineProps({
  id: Number,
  title: String,
  price: Number,
  url_image: String,
});
</script>
<template>
  <div
    class="w-80 h-122 rounded-xl overflow-hidden shadow-md bg-gray-100 hover:shadow-lg transition-all duration-300"
  >
    <!-- Imagen del producto -->
    <img
      :src="`${url_image}`"
      alt="Product Image"
      class="w-full h-80 object-cover"
    />

    <!-- Contenido del producto -->
    <div class="px-4 py-2 flex flex-col justify-between h-40">
      <h2 class="text-lg font-bold text-gray-900 truncate">
        {{ title }}
      </h2>
      <p class="text-gray-700 font-semibold text-md mt-1">${{ price }}</p>

      <NuxtLink
        class="mt-auto w-full bg-amber-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition-colors duration-200 text-center"
        :to="`/products/${id}`"
      >
        View Product
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
