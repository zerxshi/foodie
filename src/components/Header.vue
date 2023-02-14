<template>
  <div class="flex flex-col lg:flex-row lg:justify-between items-center">
    <img class="w-40 h-40 cursor-pointer" src="../assets/logo.png" alt="logo" />
    <div>
      <header-btn>Meal type</header-btn>
      <header-btn>Dish type</header-btn>
      <header-btn>Cuisine type</header-btn>
    </div>
    <form class="flex items-center mt-2 lg:mt-0 lg:mr-8">
      <font-awesome-icon
        icon="fa-solid fa-magnifying-glass"
        class="absolute z-2 block text-center pointer-events-none text-slate-700"
      />
      <input
        class="outline-none border-b-2 border-slate-700 w-72 pl-5 font-bold text-slate-700 placeholder:text-center"
        type="text"
        placeholder="Search recipe by name..."
      />
    </form>
  </div>
</template>

<script setup lang="ts"></script>

<style></style>
