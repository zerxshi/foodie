import { defineStore } from "pinia"
import { ref, computed } from "vue"
import axios from "axios"

export const useStoreRecipes = defineStore("storeRecipes", () => {
  let recipes = ref<any[]>([])
  const app_id = ref<string>("35d84dc5")
  const app_key = ref<string>("5a6c0ee03b0775c1c82066e2548a8a11")
  let isNavOpen = ref<Boolean>(false)

  const getRecipes = async (): Promise<any> => {
    try {
      const postsResponse = await axios.get(
        `https://api.edamam.com/api/recipes/v2?type=public&app_id=${app_id.value}&app_key=${app_key.value}&health=vegetarian&cuisineType=Asian&mealType=Dinner&imageSize=LARGE&random=true`
      )
      recipes.value = postsResponse.data.hits
    } catch (err) {
      console.error(err)
    }

    // try {
    //   const data = await fetch(
    //     "https://api.edamam.com/api/recipes/v2?type=public&q=pizza&app_id=35d84dc5&app_key=%205a6c0ee03b0775c1c82066e2548a8a11"
    //   )
    //   const response = await data.json()
    //   console.log(response)
    // } catch (e) {
    //   console.error(e)
    // }
    // fetch("https://api.edamam.com/api/recipes/v2")
    //   .then((response) => response.json())
    //   .then((response) => console.log(response))
    //   .catch((err) => console.error(err))
  }
  const recipesToShow = computed<any>(() => recipes)
  return {
    getRecipes,
    recipes,
    isNavOpen,
  }
})
