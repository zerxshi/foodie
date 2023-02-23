<template>
  <Images-list />
  <div
    class="mt-3 flex items-center justify-center gap-4 text-2xl text-slate-800"
  >
    <font-awesome-icon icon="fa-brands fa-square-instagram" />
    <font-awesome-icon icon="fa-brands fa-pinterest" />
    <font-awesome-icon icon="fa-brands fa-youtube" />

    <img class="h-40 w-40 cursor-pointer" src="../assets/logo.png" alt="logo" />

    <font-awesome-icon icon="fa-brands fa-twitter" />
    <font-awesome-icon icon="fa-brands fa-facebook-f" />
    <font-awesome-icon icon="fa-solid fa-envelope" />
  </div>
</template>

<script setup lang="ts">
import ImagesList from "@/components/ImagesList.vue"
</script>
