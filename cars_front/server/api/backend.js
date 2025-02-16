export default defineEventHandler(async (event) => {
	const data = await $fetch('http://127.0.0.1:8000/car/get_cars');
	return data;
})
