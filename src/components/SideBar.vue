<template>
  <div class="sm:max-w-xs lg:w-64">
    <img src="@/assets/sidebar image.png" alt="" class="lg:w-72 xl:w-64" />

    <sidebar-card
      v-for="card in sidebarCards"
      :key="card"
      :imageSource="card.imageSource"
      :recipeType="card.recipeType"
      :recipeTitle="card.recipeTitle"
      :recipeId="card.recipeId"
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

<script lang="ts">
export default {
  name: "Side-bar",
}
</script>

<script setup lang="ts">
import { ref } from "vue"
import { useStoreRecipes } from "@/stores/storeRecipes"

const props = defineProps({
  isHomePage: {
    type: Boolean,
    default: true,
  },
})

const storeRecipes = useStoreRecipes()

interface card {
  imageSource: string
  recipeType: string
  recipeTitle: string
  recipeId: string
}

const sidebarCards = ref<card[]>([
  {
    imageSource: storeRecipes.recipes[11].image,
    recipeType: storeRecipes.recipes[11].type,
    recipeTitle: storeRecipes.recipes[11].name,
    recipeId: storeRecipes.recipes[11].id,
  },
  {
    imageSource: storeRecipes.recipes[12].image,
    recipeType: storeRecipes.recipes[12].type,
    recipeTitle: storeRecipes.recipes[12].name,
    recipeId: storeRecipes.recipes[12].id,
  },
  {
    imageSource: storeRecipes.recipes[13].image,
    recipeType: storeRecipes.recipes[13].type,
    recipeTitle: storeRecipes.recipes[13].name,
    recipeId: storeRecipes.recipes[13].id,
  },
  {
    imageSource: storeRecipes.recipes[14].image,
    recipeType: storeRecipes.recipes[14].type,
    recipeTitle: storeRecipes.recipes[14].name,
    recipeId: storeRecipes.recipes[14].id,
  },
  {
    imageSource: storeRecipes.recipes[15].image,
    recipeType: storeRecipes.recipes[15].type,
    recipeTitle: storeRecipes.recipes[15].name,
    recipeId: storeRecipes.recipes[15].id,
  },
])
</script>
