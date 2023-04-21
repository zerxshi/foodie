<template>
  <transition leave-active-class="animate-closeModal">
    <div
      v-if="storeRecipes.isModalOpen"
      @click="storeRecipes.isModalOpen = false"
      class="fixed top-0 left-0 right-0 bottom-0 z-40 bg-black bg-opacity-50"
    ></div>
  </transition>
</template>

<script setup lang="ts">
import { useStoreRecipes } from "@/stores/storeRecipes"

const storeRecipes = useStoreRecipes()
</script>
