<script setup>
defineProps({
	id: Number,
	image_url: String,
	year: Number,
	brand: String,
	model: String,
	description: String,
	max_speed: Number,
	acceleration_0_100: Number,
	hp: Number,
	engine: String,
	transmission: String,
	base_price: Number,
	country_manufacture: String
})
const delete_car = () => {
	console.log(id)
	/*fetch(`http://127.0.0.1:8000/car/delete/${id}`, {
		method: 'DELETE',
		headers: {
			'Content-type': 'application/json'
		}


	}) */

	console.log('car deleted')

}
</script>
<template>
	<div class="flex flex-col items-center p-6">
		<img :src="image_url" alt="Car Image" class="w-full max-w-4xl h-auto rounded-lg shadow-lg" />

		<div class="mt-6 bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
			<h1 class="text-3xl font-bold text-gray-900">{{ brand }} - {{ model }} ({{ year }})
			</h1>
			<p class="text-gray-600 mt-2">{{ description }}</p>
			<div class="grid grid-cols-2 gap-4 mt-4">
				<p><strong>Max Speed:</strong> {{ max_speed }} km/h</p>
				<p><strong>0-100 km/h:</strong> {{ acceleration_0_100 }} sec</p>
				<p><strong>Horsepower:</strong> {{ hp }} HP</p>
				<p><strong>Engine:</strong> {{ engine }}</p>
				<p><strong>Transmission:</strong> {{ transmission }}</p>
				<p><strong>Base Price:</strong> ${{ base_price }}</p>
				<p><strong>Manufactured in:</strong> {{ country_manufacture }}</p>
			</div>

			<div class="flex justify-between mt-6">
				<button @click.prevent="editCar"
					class="px-4 py-2 bg-blue-500 text-white rounded-lg shadow">Editar</button>
				<button @click.prevent="delete_car"
					class="px-4 py-2 bg-red-500 text-white rounded-lg shadow">Eliminar</button>
			</div>
		</div>
	</div>
</template>
