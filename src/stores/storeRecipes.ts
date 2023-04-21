import { defineStore } from "pinia"
import { ref } from "vue"
import { collection, getDocs } from "firebase/firestore"
import { db } from "@/ts/firebase"

export const useStoreRecipes = defineStore("storeRecipes", () => {
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

  interface carouselSlide {
    title: string
    type: string
    image: string
  }

  const recipes = ref<recipe[]>([])
  const carouselSlides = ref<carouselSlide[]>([])
  let isNavOpen = ref<Boolean>(false)
  let isModalOpen = ref<Boolean>(false)
  const recipesCollectionRef = collection(db, "recipes")

  const shuffleArr = (array: any[]): void => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
  }

  const getRecipes = async (): Promise<any> => {
    const querySnapshot = await getDocs(recipesCollectionRef)
    querySnapshot.forEach((doc) => {
      // console.log(doc.id, " => ", doc.data())
      let recipe: recipe = {
        id: doc.id,
        name: doc.data().name,
        type: doc.data().type,
        image: doc.data().image,
        description: doc.data().description,
        info: doc.data().info,
        ingredients: doc.data().ingredients,
        steps: doc.data().steps,
        stepImages: doc.data().stepImages,
        stepNames: doc.data().stepNames,
      }
      recipes.value.push(recipe)
    })
    shuffleArr(recipes.value)
  }

  const splitCategory = (title: string): string => {
    return title.split(" ")[0].toLowerCase()
  }

  return {
    getRecipes,
    splitCategory,
    recipes,
    carouselSlides,
    isNavOpen,
    isModalOpen,
  }
})
