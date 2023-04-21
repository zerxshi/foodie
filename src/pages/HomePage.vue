<template>
  <div v-if="storeRecipes.recipes.length">
    <Carousel />
    <Category-recs />
    <Recipes-list />
  </div>
</template>

<script setup lang="ts">
import Carousel from "@/modules/Carousel.vue"
import CategoryRecs from "@/modules/CategoryRecs/CategoryRecs.vue"
import RecipesList from "@/modules/RecipesList/RecipesList.vue"
import { useStoreRecipes } from "@/stores/storeRecipes"

const storeRecipes = useStoreRecipes()
</script>
