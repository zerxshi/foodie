<template>
  <div class="sm:max-w-sm lg:w-72 xl:w-64">
    <img src="../assets/sidebar image.png" alt="" />

    <sidebar-card
      v-for="card in sidebarCards"
      :key="card"
      :imageSource="card.imageSource"
      :recipeType="card.recipeType"
      :recipeTitle="card.recipeTitle"
    />

    <div
      v-if="!isHomePage"
      class="mt-5 flex flex-col items-center gap-5 bg-gray-100 py-8"
    >
      <p class="font-semibold">Subscribe to newsletter</p>
      <input
        type="email"
        placeholder="E-mail"
        class="h-12 w-48 border border-b-2 border-gray-300 px-7 text-sm font-semibold outline-none transition-all duration-500 placeholder:text-xs placeholder:text-gray-500 focus:border-b-light-green"
      />
      <primary-btn class="w-48">Subscribe</primary-btn>
      <p class="mx-4 text-center text-xs text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  isHomePage: {
    type: Boolean,
    default: true,
  },
})

import { ref } from "vue"

const sidebarCards = ref<any[]>([
  {
    imageSource:
      "https://cdn.pixabay.com/photo/2020/06/02/12/20/soup-5250765_960_720.jpg",
    recipeType: "SOUP",
    recipeTitle: "Vietnam soup",
  },
  {
    imageSource:
      "https://cdn.pixabay.com/photo/2016/11/21/15/41/appetizer-1846026_960_720.jpg",
    recipeType: "SALAD",
    recipeTitle: "Egg salad",
  },
  {
    imageSource:
      "https://cdn.pixabay.com/photo/2017/06/16/07/00/sandwich-2408026_960_720.jpg",
    recipeType: "SANDWICHE",
    recipeTitle: "Ham sandwich",
  },
  {
    imageSource:
      "https://cdn.pixabay.com/photo/2017/10/19/13/25/cheesecake-2867614_960_720.jpg",
    recipeType: "DESSERT",
    recipeTitle: "Cheesecake",
  },
  {
    imageSource:
      "https://cdn.pixabay.com/photo/2018/07/18/19/12/pasta-3547078_960_720.jpg",
    recipeType: "PASTA",
    recipeTitle: "Italian pasta",
  },
])
</script>
