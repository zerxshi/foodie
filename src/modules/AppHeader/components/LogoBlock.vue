<template>
  <div class="flex">
    <img
      @click="$router.push('/')"
      class="h-28 w-28 cursor-pointer"
      src="@/assets/logo.png"
      alt="logo"
    />
    <button
      @click="storeRecipes.isModalOpen = true"
      class="hidden font-semibold text-gray-500 hover:text-light-green lg:block"
    >
      Login / Register
    </button>
  </div>
</template>

<script setup lang="ts">
import { useStoreRecipes } from "@/stores/storeRecipes"

const storeRecipes = useStoreRecipes()
</script>
