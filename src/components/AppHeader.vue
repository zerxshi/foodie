<template>
  <div
    class="sticky top-0 z-50 flex flex-col items-center bg-white shadow-lg shadow-gray-300 lg:flex-row lg:justify-between"
  >
    <div class="flex">
      <img
        class="h-28 w-28 cursor-pointer"
        src="../assets/logo.png"
        alt="logo"
      />
      <button class="font-semibold text-gray-500 hover:text-light-green">
        Login / Register
      </button>
    </div>
    <div>
      <header-btn>Meal type</header-btn>
      <header-btn>Dish type</header-btn>
      <header-btn>Cuisine type</header-btn>
    </div>
    <form class="mb-4 mt-2 flex items-center lg:mt-0 lg:mr-8 lg:mb-0">
      <font-awesome-icon
        icon="fa-solid fa-magnifying-glass"
        class="pointer-events-none absolute z-2 block text-center text-slate-800"
      />
      <input
        class="w-72 border-b-2 border-slate-800 pl-5 font-semibold text-slate-800 outline-none placeholder:text-center"
        type="text"
        placeholder="Search recipe by name..."
      />
    </form>
  </div>
</template>

<script setup lang="ts"></script>
