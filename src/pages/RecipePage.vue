<template>
  <div v-if="exactRecipe" class="mx-4 mt-12 flex justify-center">
    <div class="flex flex-col items-center lg:flex-row lg:items-start">
      <div
        class="flex max-w-lg flex-col gap-10 md:max-w-2xl lg:mr-10 xl:max-w-4xl"
      >
        <Recipe-info-block :exactRecipe="exactRecipe" />
        <Recipe-instructions-block :exactRecipe="exactRecipe" />
      </div>

      <Side-bar :isHomePage="false" />
    </div>
  </div>
</template>

<script setup lang="ts">
import RecipeInfoBlock from "@/modules/RecipeInfoBlock/RecipeInfoBlock.vue"
import RecipeInstructionsBlock from "@/modules/RecipeInstructionsBlock/RecipeInstructionsBlock.vue"
import SideBar from "@/components/SideBar.vue"
import { ref, onMounted } from "vue"
import { useStoreRecipes } from "@/stores/storeRecipes"
import { useRoute } from "vue-router"
import type { recipe } from "@/stores/storeRecipes"

const storeRecipes = useStoreRecipes()

const route = useRoute()

let exactRecipe = ref<recipe>()

const findRecipe = () => {
  storeRecipes.recipes.forEach((recipe: recipe) => {
    if (recipe.id == route.params.recipeId) {
      exactRecipe.value = recipe
    }
  })
}

onMounted(() => {
  let timeout = setInterval(() => {
    if (storeRecipes.recipes.length) {
      clearInterval(timeout)
      findRecipe()
    }
  }, 100)
})
</script>
