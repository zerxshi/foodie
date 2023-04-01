<template>
  <div
    class="sticky top-0 z-2 flex flex-col items-center bg-white shadow-lg shadow-gray-300 lg:flex-row lg:justify-between"
  >
    <font-awesome-icon
      @click="storeRecipes.isNavOpen = true"
      icon="fa-solid fa-bars"
      class="fixed left-2 top-2 text-2xl text-gray-500 lg:hidden"
    />
    <Navbar />

    <div class="flex">
      <img
        @click="$router.push('/')"
        class="h-28 w-28 cursor-pointer"
        src="../assets/logo.png"
        alt="logo"
      />
      <button
        @click="storeRecipes.isModalOpen = true"
        class="hidden font-semibold text-gray-500 hover:text-light-green lg:block"
      >
        Login / Register
      </button>
    </div>

    <div class="hidden lg:block">
      <Header-btns />
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

<script setup lang="ts">
import { ref } from "vue"
import { useStoreRecipes } from "@/stores/storeRecipes"
import Navbar from "@/components/Navbar.vue"
import HeaderBtns from "@/components/HeaderBtns.vue"

const storeRecipes = useStoreRecipes()
</script>
