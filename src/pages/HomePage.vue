<template>
  <Carousel />
  <div class="m-8 flex flex-col items-center justify-center">
    <Recommendations />
    <Recipes-list />
  </div>
</template>

<script setup lang="ts">
import Carousel from "@/components/Carousel.vue"
import Recommendations from "@/components/Recommendations.vue"
import RecipesList from "@/components/RecipesList.vue"
import { useStoreRecipes } from "@/stores/storeRecipes"
import { onMounted } from "vue"

// const storeRecipes = useStoreRecipes()

// onBeforeMount(() => {
//   storeRecipes.getRecipes()
// })
</script>
