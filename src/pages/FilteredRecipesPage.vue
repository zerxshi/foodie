<template>
  <div
    v-if="storePagination.searchedRecipesPortion.length"
    class="mx-4 mt-12 flex justify-center"
  >
    <div class="flex flex-col items-center lg:flex-row lg:items-start">
      <sm-recipe-card-list
        :recipesPortion="storePagination.searchedRecipesPortion"
        :totalItems="storeFilters.searchedRecipes.length"
        :onClick="storePagination.searchPagePaginationClick"
      />
      <Side-bar :isHomePage="false" />
    </div>
  </div>

  <no-result-sign v-else> No recipe found with this name </no-result-sign>
</template>

<script setup lang="ts">
import smRecipeCardList from "@/components/SmRecipeCardList.vue"
import { onMounted, ref } from "vue"
import { useStoreRecipes } from "@/stores/storeRecipes"
import { useStorePagination } from "@/stores/storePagination"
import { useStoreFilters } from "@/stores/storeFilters"

const storeRecipes = useStoreRecipes()
const storePagination = useStorePagination()
const storeFilters = useStoreFilters()

const currentPage = ref(1)

onMounted(() => {
  let timeout = setInterval(() => {
    if (storeRecipes.recipes.length) {
      clearInterval(timeout)
      storeFilters.searchRecipes()
      storePagination.searchPagePaginationClick(1)
    }
  }, 100)
})
</script>
