<script setup>
const client_question = ref('')


const handle_submit = () => {

}

</script>
<template>
  <form @submit.prevent="handle_submit" class="bg-gray-100 flex items-center justify-center h-screen">
    <div
      class="w-full max-w-2xl bg-white shadow-lg rounded-lg p-4 flex flex-col h-[90vh]"
    >
      <div class="flex-1 overflow-y-auto p-2 space-y-4">
        <div class="bg-gray-200 p-3 rounded-lg max-w-[75%] self-start">
          <p class="text-gray-800">Hola, ¿cómo puedo ayudarte hoy?</p>
        </div>
        <div class="bg-blue-500 text-white p-3 rounded-lg max-w-[75%] self-end">
          <p>Quiero un input como este en HTML con Tailwind.</p>
        </div>
      </div>
      <div class="mt-4 flex items-center gap-2">
        <input
          type="text"
          placeholder="Escribe tu mensaje..."
          class="flex-1 border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
	  v-model="client_question"
        />
        <button
          class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Enviar
        </button>
      </div>
    </div>
  </form>
</template>
