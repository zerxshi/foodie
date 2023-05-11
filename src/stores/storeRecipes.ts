import { defineStore } from "pinia"
import { ref } from "vue"
import { collection, getDocs, setDoc, doc, deleteDoc } from "firebase/firestore"
import { db } from "@/ts/firebase"
import { useStoreAuth } from "./storeAuth"

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
    saved?: boolean
  }

  const recipes = ref<recipe[]>([])
  const savedRecipes = ref<recipe[]>([])
  let isNavOpen = ref<boolean>(false)
  const recipesCollectionRef = collection(db, "recipes")
  let usersCollectionRef: any

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
    savedRecipes.value.push(recipe)
  }

  const deleteRecipe = async (recipeId: string): Promise<any> => {
    await deleteDoc(doc(usersCollectionRef, recipeId))
    savedRecipes.value = savedRecipes.value.filter(
      (recipe) => recipe.id !== recipeId
    )
  }

  let isSavedRecipesEmpty = ref<Boolean>(false)

  const getSavedRecipes = async (): Promise<any> => {
    const storeAuth = useStoreAuth()
    usersCollectionRef = collection(
      db,
      "users",
      storeAuth.userData.uid!,
      "likedRecipes"
    )

    const querySnapshot = await getDocs(usersCollectionRef)
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
      savedRecipes.value.push(recipe)
    })
    if (savedRecipes.value.length === 0) isSavedRecipesEmpty.value = true
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
