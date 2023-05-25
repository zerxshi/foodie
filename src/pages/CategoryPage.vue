<template>
  <main
    v-if="storePagination.categoryRecipesPortion.length"
    class="mx-4 mt-12 flex justify-center"
  >
    <section class="flex flex-col items-center lg:flex-row lg:items-start">
      <sm-recipe-card-list
        :recipesPortion="storePagination.categoryRecipesPortion"
        :totalItems="storePagination.filteredRecipes.length"
        :onClick="storePagination.categoryPagePaginationClick"
      />
      <Side-bar :isHomePage="false" />
    </section>
  </main>
</template>

<script setup lang="ts">
import smRecipeCardList from "@/components/SmRecipeCardList.vue"
import { onMounted } from "vue"
import { useStoreRecipes } from "@/stores/storeRecipes"
import { useStorePagination } from "@/stores/storePagination"

const storeRecipes = useStoreRecipes()
const storePagination = useStorePagination()

onMounted(() => {
  let timeout = setInterval(() => {
    if (storeRecipes.recipes.length) {
      clearInterval(timeout)
      storePagination.categoryPagePaginationClick(1)
    }
  }, 100)
})
</script>
