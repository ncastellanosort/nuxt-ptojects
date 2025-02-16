<script setup>
import CarInfo from '@/components/CarInfo.vue'

const route = useRoute()

const { data } = await useFetch(`http://127.0.0.1:8000/car/${route.params.id}`)
</script>

<template>
	<CarInfo :id="Number(route.params.id)" :image_url="data.image_url" :year="data.year" :brand="data.brand"
		:model="data.model" :description="data.description" :max_speed="data.max_speed"
		:acceleration_0_100="data.acceleration_0_100" :hp="data.hp" :engine="data.engine"
		:transmission="data.transmission" :base_price="data.base_price"
		:country_manufacture="data.country_manufacture" />

</template>
