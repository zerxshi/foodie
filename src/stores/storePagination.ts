import { defineStore } from "pinia"
import { ref, computed } from "vue"
import { useStoreRecipes } from "./storeRecipes"
import { useStoreFilters } from "@/stores/storeFilters"
import { useRoute } from "vue-router"

export const useStorePagination = defineStore("storePagination", () => {
  const storeRecipes = useStoreRecipes()
  const storeFilters = useStoreFilters()
  const route = useRoute()

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
    saved?: boolean
  }

  let searchedRecipesPortion = ref<recipe[]>([])

  const searchPagePaginationClick = (page: number): void => {
    searchedRecipesPortion.value = storeFilters.searchedRecipes.slice(
      (page - 1) * 6,
      page * 6
    )
  }

  let savedRecipesPortion = ref<recipe[]>([])

  const savedPagePaginationClick = (page: number): void => {
    savedRecipesPortion.value = storeRecipes.savedRecipes.slice(
      (page - 1) * 6,
      page * 6
    )
  }

  let categoryRecipesPortion = ref<recipe[]>([])

  const categoryPagePaginationClick = (page: number): void => {
    categoryRecipesPortion.value = filteredRecipes.value.slice(
      (page - 1) * 6,
      page * 6
    )
  }

  const filteredRecipes = computed<recipe[]>(() => {
    return storeRecipes.recipes.filter((recipe: recipe) =>
      recipe.type.toLowerCase().includes(route.params.category as string)
    )
  })

  return {
    searchedRecipesPortion,
    savedRecipesPortion,
    categoryRecipesPortion,
    filteredRecipes,
    searchPagePaginationClick,
    savedPagePaginationClick,
    categoryPagePaginationClick,
  }
})
