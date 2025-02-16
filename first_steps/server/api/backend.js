export default defineEventHandler(async (event) => {
    const data = await $fetch("https://fakestoreapi.com/products");
    
    // const { id } = useQuery(event) // get the query param

    // handle post data

    // const { age } = await useBody(event)

    return data;
});
  