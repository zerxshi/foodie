<template>
  <div v-if="recipesPortion.length" class="mx-4 mt-12 flex justify-center">
    <div class="flex flex-col items-center lg:flex-row lg:items-start">
      <div
        class="flex max-w-xl flex-col gap-7 md:max-w-2xl lg:mr-10 xl:max-w-4xl"
      >
        <sm-recipe-card
          v-for="recipe in recipesPortion"
          :key="recipe"
          :imageSource="recipe.image"
          :recipeTitle="recipe.name"
          :recipeDescription="recipe.description"
        />
        <vue-awesome-paginate
          :total-items="filteredRecipes.length"
          :items-per-page="6"
          :hidePrevNext="true"
          :showBreakpointButtons="false"
          v-model="currentPage"
          :on-click="onClickHandler"
          paginate-buttons-class="h-8 w-8 bg-gray-300 text-xs font-semibold text-gray-700 transition-all duration-500 hover:bg-light-green hover:text-white"
          pagination-container-class="flex gap-2"
          active-page-class="bg-light-green text-white"
          class="mt-5"
        />
      </div>
      <Side-bar :isHomePage="false" />
    </div>
  </div>
</template>

<script setup lang="ts">
import PaginationBtns from "@/components/PaginationBtns.vue"
import { computed, onMounted, ref } from "vue"
import { useStoreRecipes } from "@/stores/storeRecipes"
import { useRoute } from "vue-router"

const storeRecipes = useStoreRecipes()

const route = useRoute()

const currentPage = ref(1)

interface recipe {
  id: string
  name: string
  type: string
  image: string
  description: string
  info: Array<string>
  ingredients: Array<string>
  steps: Array<string>
  stepImages: Array<string>
  stepNames: Array<string>
}

let recipesPortion = ref<recipe[]>([])

const onClickHandler = (page: number): void => {
  recipesPortion.value = filteredRecipes.value.slice((page - 1) * 6, page * 6)
}

const filteredRecipes = computed<recipe[]>(() => {
  return storeRecipes.recipes.filter((recipe: recipe) =>
    recipe.type.toLowerCase().includes(route.params.category as string)
  )
})

onMounted(() => {
  let timeout = setInterval(() => {
    if (storeRecipes.recipes.length) {
      onClickHandler(1)
    }
  }, 100)
})
</script>
