<script setup>
import CarCard from '@/components/CarCard.vue'

const { data } = await useFetch('/api/backend')

</script>

<template>

	<nav class="flex justify-center items-center flex-wrap bg-gray-100 shadow-xl p-8">
		<h1 class="text-6xl font-serif text-gray-900 font-extrabold text-center">
			Cars
		</h1>
	</nav>

	<section class="flex justify-center items-center flex-wrap my-4 min-h-screen">

		<div v-for="car in data" :key="car.id" :id="car.id"
			class="transition-transform transform hover:scale-105">
			<CarCard :key="car.id" :id="car.id" :image_url="car.image_url" :model="car.model"
				:year="car.year" :description="car.description" :brand="car.brand" />
		</div>

	</section>

</template>
