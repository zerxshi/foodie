<template>
  <div class="mx-4 flex justify-center">
    <div class="max-w-lg md:max-w-3xl lg:max-w-5xl xl:max-w-6xl">
      <recipe-card
        v-for="(card, index) in recipeCards"
        :key="card"
        :imageSource="card.imageSource"
        :recipeType="card.recipeType"
        :recipeTitle="card.recipeTitle"
        :recipeDescription="card.recipeDescription"
        :recipeId="card.recipeId"
        :textRight="textPosition(index)"
      />
      <div class="mt-16 flex flex-col items-center gap-7 lg:flex-row">
        <div class="flex flex-col gap-7 lg:mr-10 lg:max-w-2xl xl:max-w-4xl">
          <sm-recipe-card
            v-for="card in smallRecipeCards"
            :key="card"
            :imageSource="card.imageSource"
            :recipeType="card.recipeType"
            :recipeTitle="card.recipeTitle"
            :recipeDescription="card.recipeDescription"
            :recipeId="card.recipeId"
          />
        </div>
        <div>
          <Side-bar />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useStoreRecipes } from "@/stores/storeRecipes"

const storeRecipes = useStoreRecipes()

interface card {
  imageSource: string
  recipeType: string
  recipeTitle: string
  recipeDescription: string
  recipeId: string
}

const textPosition = (index: number): Boolean => {
  if (index % 2 === 0) return true
  return false
}

const recipeCards = ref<card[]>([
  {
    imageSource: storeRecipes.recipes[6].image,
    recipeType: storeRecipes.recipes[6].type,
    recipeTitle: storeRecipes.recipes[6].name,
    recipeDescription: storeRecipes.recipes[6].description,
    recipeId: storeRecipes.recipes[6].id,
  },
  {
    imageSource: storeRecipes.recipes[7].image,
    recipeType: storeRecipes.recipes[7].type,
    recipeTitle: storeRecipes.recipes[7].name,
    recipeDescription: storeRecipes.recipes[7].description,
    recipeId: storeRecipes.recipes[7].id,
  },
])

const smallRecipeCards = ref<card[]>([
  {
    imageSource: storeRecipes.recipes[8].image,
    recipeType: storeRecipes.recipes[8].type,
    recipeTitle: storeRecipes.recipes[8].name,
    recipeDescription: storeRecipes.recipes[8].description,
    recipeId: storeRecipes.recipes[8].id,
  },
  {
    imageSource: storeRecipes.recipes[9].image,
    recipeType: storeRecipes.recipes[9].type,
    recipeTitle: storeRecipes.recipes[9].name,
    recipeDescription: storeRecipes.recipes[9].description,
    recipeId: storeRecipes.recipes[9].id,
  },
  {
    imageSource: storeRecipes.recipes[10].image,
    recipeType: storeRecipes.recipes[10].type,
    recipeTitle: storeRecipes.recipes[10].name,
    recipeDescription: storeRecipes.recipes[10].description,
    recipeId: storeRecipes.recipes[10].id,
  },
])
</script>
