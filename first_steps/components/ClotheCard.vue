<script setup>
defineProps({
  id: Number,
  title: String,
  price: Number,
  description: String,
  category: String,
  image: String,
  rate: Number,
  count: Number,
});
</script>
<template>
  <div
    class="max-w-4xl mx-auto my-8 bg-white rounded-2xl overflow-hidden shadow-lg p-6 flex gap-6"
  >
    <img
      class="w-1/2 h-auto object-cover rounded-xl"
      :src="`${image}`"
      :alt="`${title}`"
    />

    <div class="w-1/2 flex flex-col justify-between">
      <div>
        <h2 class="text-3xl font-bold text-gray-800">
          {{ title }}
        </h2>
        <p class="text-gray-600 mt-4 text-lg">
          {{ description }}
        </p>
        <p class="text-gray-800 font-extrabold text-2xl mt-6">${{ price }}</p>
        <p class="text-gray-500 text-md mt-2">Category: {{ category }}</p>

        <div class="flex items-center mt-4">
          <div class="flex text-yellow-400 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 fill-current"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.972a1 1 0 00.95.69h4.174c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.972c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.972a1 1 0 00-.364-1.118L2.05 9.4c-.783-.57-.38-1.81.588-1.81h4.174a1 1 0 00.95-.69l1.287-3.972z"
              />
            </svg>
            <span class="ml-2 text-gray-800 text-lg">{{ rate }}</span>
          </div>
          <span class="ml-3 text-gray-500 text-md">({{ count }} reviews)</span>
        </div>
      </div>

      <button
        class="mt-6 w-full bg-blue-600 text-white py-3 px-6 rounded-2xl hover:bg-blue-700 transition"
      >
        Add to Cart
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
