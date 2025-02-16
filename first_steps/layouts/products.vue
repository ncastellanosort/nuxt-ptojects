<script setup></script>

<template>
  <nav class="flex justify-center bg-amber-500">
    <ul class="flex">
      <li class="m-4"><NuxtLink to="/home">Home</NuxtLink></li>
      <li class="m-4"><NuxtLink to="/about">About</NuxtLink></li>
      <li class="m-4">
        <NuxtLink to="/products/all_products">Products</NuxtLink>
      </li>
      <li class="m-4"><NuxtLink to="/home">Cart</NuxtLink></li>
    </ul>
  </nav>

  <div>
    <slot />
  </div>
</template>
