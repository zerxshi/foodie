<template>
  <div
    v-if="storeRecipes.isNavOpen"
    class="fixed left-0 z-10 flex h-screen w-80 transform flex-col items-center gap-5 bg-white transition duration-500 ease-in"
    :class="{
      '-translate-x-80 transform transition duration-500 ease-out':
        !storeRecipes.isNavOpen,
    }"
  >
    <font-awesome-icon
      @click="storeRecipes.isNavOpen = false"
      icon="fa-solid fa-xmark"
      class="self-end text-xl text-slate-700"
    />

    <div class="w-full text-center">
      <header-btn>Home</header-btn>
      <hr />
      <div class="relative inline-block">
        <header-btn class="group"
          >Categories
          <font-awesome-icon
            icon="fa-solid fa-angle-down"
            class="text-base text-slate-600 group-hover:text-light-green"
          />
          <div
            class="absolute z-2 hidden flex-col bg-white shadow-2xl transition-all duration-1000 group-hover:flex"
          >
            <header-btn class="text-sm">Meal type</header-btn>
            <hr />
            <header-btn class="text-sm">Dish type</header-btn>
            <hr />
            <header-btn class="text-sm">Cuisine type</header-btn>
          </div>
        </header-btn>
      </div>
      <hr />
      <header-btn>Contact us</header-btn>
      <hr />
    </div>

    <button class="font-semibold text-gray-500 hover:text-light-green">
      Login / Register
    </button>
  </div>
</template>

<script setup lang="ts">
import { useStoreRecipes } from "@/stores/storeRecipes"

const storeRecipes = useStoreRecipes()
</script>
