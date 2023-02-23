<template>
  <div class="mt-16 sm:max-w-sm lg:w-72 xl:w-64">
    <img src="../assets/sidebar image.png" alt="" />
    <sidebar-card
      v-for="card in sidebarCards"
      :key="card"
      :imageSource="card.imageSource"
      :recipeType="card.recipeType"
      :recipeTitle="card.recipeTitle"
    />
  </div>
</template>

<script setup lang="ts">
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
