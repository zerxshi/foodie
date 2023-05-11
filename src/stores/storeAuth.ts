import { defineStore } from "pinia"
import { reactive, ref } from "vue"
import { auth } from "@/ts/firebase"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth"
import { useStoreRecipes } from "./storeRecipes"

export const useStoreAuth = defineStore("storeAuth", () => {
  let regModalOpen = ref<Boolean>(false)
  const register = ref<Boolean>(false)
  let validationError = ref<Boolean>(false)

  interface credentials {
    email: string
    login: string
    password: string
  }

  const credentials = reactive<credentials>({
    email: "",
    login: "",
    password: "",
  })

  const onModalOpen = (): void => {
    regModalOpen.value = true
    validationError.value = false
    credentials.email = ""
    credentials.login = ""
    credentials.password = ""
  }

  const onClickLogin = (): void => {
    register.value = false
    validationError.value = false
    credentials.email = ""
    credentials.login = ""
    credentials.password = ""
  }

  const onClickRegister = (): void => {
    register.value = true
    validationError.value = false
    credentials.email = ""
    credentials.login = ""
    credentials.password = ""
  }

  interface userData {
    email?: string | null
    login?: string | null
    uid?: string | null
  }

  const userData = ref<userData>({})

  const init = () => {
    const storeRecipes = useStoreRecipes()
    onAuthStateChanged(auth, (user) => {
      if (user) {
        userData.value.email = user.email
        userData.value.login = user.displayName
        userData.value.uid = user.uid
        storeRecipes.getSavedRecipes()
      } else {
        userData.value = {}
      }
    })
  }

  const registerUser = async (): Promise<any> => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      )
        .then((userCredential) => {
          const user = userCredential.user
        })
        .catch((error) => {
          console.log(error.message)
        })

      await updateProfile(auth.currentUser!, {
        displayName: credentials.login,
      }).catch((error) => console.log(error))
    } catch (error) {
      console.error(error)
    }
  }

  const loginUser = (): void => {
    signInWithEmailAndPassword(auth, credentials.email, credentials.password)
      .then((userCredential) => {
        const user = userCredential.user
      })
      .catch((error) => {
        console.log(error.message)
      })
  }

  const logoutUser = (): void => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error.message)
      })
  }

  const onSubmit = (): void => {
    if (
      !credentials.email ||
      !credentials.password ||
      (register.value && !credentials.login)
    ) {
      validationError.value = true
    } else {
      if (register.value) {
        validationError.value = false
        registerUser()
        regModalOpen.value = false
      } else {
        validationError.value = false
        loginUser()
        regModalOpen.value = false
      }
    }
  }

  return {
    register,
    regModalOpen,
    validationError,
    credentials,
    userData,
    onModalOpen,
    onClickLogin,
    onClickRegister,
    init,
    onSubmit,
    logoutUser,
  }
})
