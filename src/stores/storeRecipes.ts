import { defineStore } from "pinia"
import { ref } from "vue"
import {
  collection,
  getDocs,
  onSnapshot,
  setDoc,
  doc,
  deleteDoc,
  orderBy,
  query,
} from "firebase/firestore"
import { db } from "@/ts/firebase"
import { useStoreAuth } from "./storeAuth"

export interface recipe {
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

export const useStoreRecipes = defineStore("storeRecipes", () => {
  const recipes = ref<recipe[]>([])
  const savedRecipes = ref<recipe[]>([])
  const recipesCollectionRef = collection(db, "recipes")
  const isNavOpen = ref<boolean>(false)
  let usersCollectionRef: any

  const shuffleArr = (array: recipe[]): void => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
  }

  const getRecipes = async (): Promise<any> => {
    const querySnapshot = await getDocs(recipesCollectionRef)
    querySnapshot.forEach((doc) => {
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

  const isSavedRecipesEmpty = ref<Boolean>(false)

  const getSavedRecipes = async (): Promise<any> => {
    const storeAuth = useStoreAuth()
    usersCollectionRef = collection(
      db,
      "users",
      storeAuth.userData.uid!,
      "likedRecipes"
    )

    onSnapshot(query(usersCollectionRef, orderBy("name")), (querySnapshot) => {
      let newSavedRecipes = ref<recipe[]>([])
      querySnapshot.forEach((doc: any) => {
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
        newSavedRecipes.value.push(recipe)
      })
      savedRecipes.value = newSavedRecipes.value
    })

    if (savedRecipes.value.length === 0) isSavedRecipesEmpty.value = true
  }

  const saveRecipe = async (
    recipe: recipe | Record<string, any> | undefined
  ): Promise<any> => {
    await setDoc(doc(usersCollectionRef, recipe!.id), {
      id: recipe!.id,
      name: recipe!.name,
      type: recipe!.type,
      image: recipe!.image,
      description: recipe!.description,
      info: recipe!.info,
      ingredients: recipe!.ingredients,
      steps: recipe!.steps,
      stepImages: recipe!.stepImages,
      stepNames: recipe!.stepNames,
      saved: true,
    })
  }

  const deleteRecipe = async (recipeId: string): Promise<any> => {
    await deleteDoc(doc(usersCollectionRef, recipeId))
  }

  return {
    recipes,
    savedRecipes,
    isNavOpen,
    isSavedRecipesEmpty,
    getRecipes,
    getSavedRecipes,
    saveRecipe,
    deleteRecipe,
  }
})
