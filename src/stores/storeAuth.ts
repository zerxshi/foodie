import { defineStore } from "pinia"
import { reactive, ref } from "vue"
import { auth } from "@/ts/firebase"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  TwitterAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth"
import { useStoreRecipes } from "./storeRecipes"
import { useRoute, useRouter } from "vue-router"

export const useStoreAuth = defineStore("storeAuth", () => {
  let regModalOpen = ref<Boolean>(false)
  const register = ref<Boolean>(false)
  let validationError = ref<Boolean>(false)
  const route = useRoute()
  const router = useRouter()

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
      .then(() => {
        if (route.name == "saved-recipes") {
          router.back()
        }
      })
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

  const googleProvider = new GoogleAuthProvider()

  const signWithGoogle = (): void => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential!.accessToken
        const user = result.user
        regModalOpen.value = false
      })
      .catch((error) => {
        const errorMessage = error.message
        const credential = GoogleAuthProvider.credentialFromError(error)
        console.log(errorMessage)
      })
  }

  const twitterProvider = new TwitterAuthProvider()

  const signWithTwitter = (): void => {
    signInWithPopup(auth, twitterProvider)
      .then((result) => {
        const credential = TwitterAuthProvider.credentialFromResult(result)
        const token = credential!.accessToken
        const secret = credential!.secret
        const user = result.user
        regModalOpen.value = false
      })
      .catch((error) => {
        const errorMessage = error.message
        const credential = TwitterAuthProvider.credentialFromError(error)
        console.log(errorMessage)
      })
  }

  const facebookProvider = new FacebookAuthProvider()

  const signWithFacebook = (): void => {
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        const user = result.user
        const credential = FacebookAuthProvider.credentialFromResult(result)
        const accessToken = credential!.accessToken
        regModalOpen.value = false
      })
      .catch((error) => {
        const errorMessage = error.message
        const credential = FacebookAuthProvider.credentialFromError(error)
        console.log(errorMessage)
      })
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
    signWithGoogle,
    signWithTwitter,
    signWithFacebook,
  }
})
