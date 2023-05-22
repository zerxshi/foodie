<template>
  <transition
    enter-active-class="animate-openNav"
    leave-active-class="animate-closeNav"
  >
    <div
      v-if="storeRecipes.isNavOpen"
      class="fixed left-0 z-10 flex h-screen w-80 flex-col items-center gap-4 overflow-x-hidden bg-white lg:-translate-x-full"
    >
      <font-awesome-icon
        @click="storeRecipes.isNavOpen = false"
        icon="fa-solid fa-xmark"
        class="m-3 self-end text-3xl text-gray-500"
      />

      <Nav-btns-section />

      <Nav-register-section />
    </div>
  </transition>
</template>

<script setup lang="ts">
import NavBtnsSection from "@/modules/Navbar.vue/components/NavBtnsSection.vue"
import NavRegisterSection from "@/modules/Navbar.vue/components/NavRegisterSection.vue"
import { useStoreRecipes } from "@/stores/storeRecipes"

const storeRecipes = useStoreRecipes()
</script>
