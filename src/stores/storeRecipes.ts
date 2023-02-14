import { defineStore } from "pinia"
import { ref } from "vue"
import axios from "axios"

export const useStoreRecipes = defineStore("storeRecipes", () => {
  const recipes = ref<any[]>([])
  const app_id = ref<string>("35d84dc5")
  const app_key = ref<string>("5a6c0ee03b0775c1c82066e2548a8a11")
  //   interface options {
  //     method: string
  //     url: string
  //     headers: {
  //       "content-type": string
  //       "X-RapidAPI-Key": string
  //       "X-RapidAPI-Host": string
  //     }
  //     data: string
  //   }

  //   const options = ref({
  //     method: "POST",
  //     url: "https://mycookbook-io1.p.rapidapi.com/recipes/rapidapi",
  //     headers: {
  //       "content-type": "text/plain",
  //       "X-RapidAPI-Key": "0ce3f5746amshac9e087d9527071p1eb138jsnbd21f33694f7",
  //       "X-RapidAPI-Host": "mycookbook-io1.p.rapidapi.com",
  //     },
  //     data: "https://www.jamieoliver.com/recipes/vegetables-recipes/superfood-salad/",
  //   })

  const getRecipes = async (): Promise<any> => {
    try {
      const postsResponse = await axios.get(
        `https://api.edamam.com/api/recipes/v2?type=public&q=pizza&app_id=${app_id.value}&app_key=${app_key.value}`
      )
      recipes.value = postsResponse.data.hits
      console.log(recipes.value)
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

  return {
    getRecipes,
  }
})
