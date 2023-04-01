<template>
  <div class="mx-4 flex justify-center">
    <div class="flex flex-col items-center lg:flex-row lg:items-start">
      <div class="max-w-xl md:max-w-2xl lg:mr-10 xl:max-w-4xl">
        <sm-recipe-card
          v-for="card in smallRecipeCards"
          :key="card"
          :imageSource="card.imageSource"
          :recipeType="card.recipeType"
          :recipeTitle="card.recipeTitle"
        />
      </div>
      <Side-bar :isHomePage="false" />
    </div>
  </div>
  <div class="mt-16 flex justify-center gap-4">
    <small-btn>01</small-btn>
    <small-btn>02</small-btn>
    <small-btn>03</small-btn>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import SideBar from "@/components/SideBar.vue"

const smallRecipeCards = ref<any[]>([
  {
    imageSource:
      "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    recipeType: "DESSERTS",
    recipeTitle: "Pancakes",
  },
  {
    imageSource:
      "https://images.pexels.com/photos/2836945/pexels-photo-2836945.jpeg?auto=compress&cs=tinysrgb&w=1600",
    recipeType: "DRINKS",
    recipeTitle: "Basic cappuccino",
  },
  {
    imageSource:
      "https://cdn.pixabay.com/photo/2018/03/29/12/19/oats-3272113_960_720.jpg",
    recipeType: "BREAKFAST",
    recipeTitle: "Oatmeal with berries",
  },
  {
    imageSource:
      "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    recipeType: "DESSERTS",
    recipeTitle: "Pancakes",
  },
  {
    imageSource:
      "https://images.pexels.com/photos/2836945/pexels-photo-2836945.jpeg?auto=compress&cs=tinysrgb&w=1600",
    recipeType: "DRINKS",
    recipeTitle: "Basic cappuccino",
  },
  {
    imageSource:
      "https://cdn.pixabay.com/photo/2018/03/29/12/19/oats-3272113_960_720.jpg",
    recipeType: "BREAKFAST",
    recipeTitle: "Oatmeal with berries",
  },
])
</script>
