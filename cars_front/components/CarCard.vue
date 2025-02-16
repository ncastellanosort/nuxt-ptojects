<script setup>

defineProps({
	id: Number,
	image_url: String,
	model: String,
	year: Number,
	description: String,
	brand: String
})


</script>
<template>
	<div
		class="border border-gray-300 w-64 h-auto rounded-xl shadow-lg m-4 transition-transform transform hover:scale-105">
		<div class="h-40">
			<img class="rounded-t-xl h-full w-full object-cover" :src="image_url" />
		</div>

		<p class="text-sm my-2 mx-3 text-gray-500">{{ year }}</p>
		<h2 class="mx-3 my-1 text-sm font-semibold text-gray-800">{{ brand }}</h2>
		<h2 class="mx-3 my-1 text-xl font-semibold text-gray-800">{{ model }}</h2>
		<div class="bg-white h-28 text-sm m-3 text-gray-700 flex flex-col justify-between">
			<p class="text-gray-600">{{ description }}</p>

			<div class="flex justify-between">
				<NuxtLink :to="`/cars/${id}`"
					class="px-3 py-1 text-gray-600 border rounded-xl border-gray-300 hover:bg-gray-100 transition-colors duration-200">
					View
				</NuxtLink>

				<div class="my-auto">
					<p class="text-gray-500 text-xs">9 mins</p>
				</div>
			</div>
		</div>
	</div>
</template>
