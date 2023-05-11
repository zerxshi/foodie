<template>
  <div
    v-if="storePagination.savedRecipesPortion.length"
    class="mx-4 mt-12 flex justify-center"
  >
    <div class="flex flex-col items-center lg:flex-row lg:items-start">
      <sm-recipe-card-list
        :recipesPortion="storePagination.savedRecipesPortion"
        :totalItems="storeRecipes.savedRecipes.length"
        :onClick="storePagination.savedPagePaginationClick"
      />
      <Side-bar :isHomePage="false" />
    </div>
  </div>

  <loading-spinner
    v-if="
      !storePagination.savedRecipesPortion.length &&
      !storeRecipes.isSavedRecipesEmpty
    "
  />

  <no-result-sign v-if="!storePagination.savedRecipesPortion.length">
    You don't have any saved recipes
  </no-result-sign>
</template>

<script setup lang="ts">
import smRecipeCardList from "@/components/SmRecipeCardList.vue"
import { computed, onMounted, ref } from "vue"
import { useStoreRecipes } from "@/stores/storeRecipes"
import { useStorePagination } from "@/stores/storePagination"

const storeRecipes = useStoreRecipes()
const storePagination = useStorePagination()

const currentPage = ref(1)

onMounted(() => {
  let interval = setInterval(() => {
    if (storeRecipes.savedRecipes.length) {
      clearInterval(interval)
      storePagination.savedPagePaginationClick(1)
    }
    if (storeRecipes.isSavedRecipesEmpty === true) {
      clearInterval(interval)
    }
  }, 100)
})
</script>
