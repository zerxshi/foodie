import { defineStore } from "pinia"
import { ref } from "vue"
import { useStoreRecipes } from "./storeRecipes"
import type { recipe } from "@/stores/storeRecipes"

export const useStoreFilters = defineStore("storeFilters", () => {
  const storeRecipes = useStoreRecipes()

  const splitCategory = (title: string | undefined): string => {
    return title!.split(" ")[0].toLowerCase()
  }

  const searchQuery = ref<string>("")

  const searchFilter = (recipe: recipe): boolean => {
    return (
      [recipe.name]
        .join("")
        .toLowerCase()
        .indexOf(searchQuery.value.toLowerCase()) !== -1
    )
  }

  const searchedRecipes = ref<recipe[]>([])

  const searchRecipes = (): void => {
    if (searchQuery.value !== "" && searchQuery.value !== " ") {
      searchedRecipes.value = storeRecipes.recipes.filter(searchFilter)
    }
  }

  return {
    searchQuery,
    searchedRecipes,
    splitCategory,
    searchRecipes,
  }
})
