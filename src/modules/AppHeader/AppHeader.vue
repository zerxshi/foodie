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
    <Logo-block />
    <Header-btns />
    <Header-input-form />
  </div>
</template>

<script setup lang="ts">
import Navbar from "@/modules/AppHeader/components/Navbar.vue"
import HeaderBtns from "@/modules/AppHeader/components/HeaderBtns.vue"
import HeaderInputForm from "@/modules/AppHeader/components/HeaderInputForm.vue"
import LogoBlock from "@/modules/AppHeader/components/LogoBlock.vue"
import { ref } from "vue"
import { useStoreRecipes } from "@/stores/storeRecipes"

const storeRecipes = useStoreRecipes()
</script>
