import { defineStore } from "pinia"
import { ref, computed } from "vue"
import axios from "axios"
import { collection, getDocs } from "firebase/firestore"
import { db } from "@/ts/firebase"

export const useStoreRecipes = defineStore("storeRecipes", () => {
  let recipes = ref<any[]>([])
  let isNavOpen = ref<Boolean>(false)
  let isModalOpen = ref<Boolean>(false)
  interface recipe {
    id: string
    name: string
    type: string
    image: string
    info: Array<string>
    ingredients: Array<string>
    steps: Array<string>
    stepImages: Array<string>
    stepNames: Array<string>
  }
  const getRecipes = async (): Promise<any> => {
    const querySnapshot = await getDocs(collection(db, "breakfast"))
    querySnapshot.forEach((doc) => {
      let recipe: recipe = {
        id: doc.id,
        name: doc.data().name,
        type: doc.data().type,
        image: doc.data().image,
        info: doc.data().info,
        ingredients: doc.data().ingredients,
        steps: doc.data().steps,
        stepImages: doc.data().stepImages,
        stepNames: doc.data().stepNames,
      }
      recipes.value.push(recipe)
      console.log(recipes.value)
    })
  }

  return {
    getRecipes,
    recipes,
    isNavOpen,
    isModalOpen,
  }
})
