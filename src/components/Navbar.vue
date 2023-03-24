<template>
  <div
    class="fixed left-0 z-10 flex h-screen w-80 flex-col items-center gap-5 overflow-x-hidden bg-white transition-transform duration-500 ease-in-out lg:-translate-x-full"
    :class="{
      'translate-x-0': storeRecipes.isNavOpen,
      '-translate-x-full': !storeRecipes.isNavOpen,
    }"
  >
    <font-awesome-icon
      @click="storeRecipes.isNavOpen = false"
      icon="fa-solid fa-xmark"
      class="m-3 self-end text-3xl text-slate-700"
    />

    <div class="w-full">
      <div class="w-full border border-b-white bg-gray-200 p-2">
        <header-btn @click="$router.push('/')" class="m-0">Home</header-btn>
      </div>
      <div class="w-full border border-b-white bg-gray-200 p-2">
        <header-btn @click="isListOpen = !isListOpen" class="group m-0"
          >Categories
          <font-awesome-icon
            icon="fa-solid fa-angle-down"
            class="text-base text-slate-600 group-hover:text-light-green"
          />
        </header-btn>
      </div>
      <div
        class="origin-top-center animate-growDown bg-white"
        v-if="isListOpen"
      >
        <header-btn @click="$router.push('/meals')" class="text-sm"
          >Meal type</header-btn
        >
        <hr />
        <header-btn @click="$router.push('/dishes')" class="text-sm"
          >Dish type</header-btn
        >
        <hr />
        <header-btn @click="$router.push('/cuisines')" class="text-sm"
          >Cuisine type</header-btn
        >
      </div>
      <div class="w-full border border-b-white bg-gray-200 p-2">
        <header-btn class="m-0">Contact us</header-btn>
      </div>
    </div>

    <div class="w-full p-2">
      <button class="m-0 font-semibold text-gray-500 hover:text-light-green">
        Login / Register
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStoreRecipes } from "@/stores/storeRecipes"
import { ref } from "vue"

const storeRecipes = useStoreRecipes()

const isListOpen = ref<Boolean>(false)
</script>
