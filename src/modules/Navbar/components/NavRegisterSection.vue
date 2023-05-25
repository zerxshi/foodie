<template>
  <section class="absolute bottom-5 w-full">
    <button
      v-if="!storeAuth.userData.uid"
      @click="storeAuth.onModalOpen"
      type="button"
      class="m-0 px-6 text-xl font-semibold text-gray-500 hover:text-light-green"
    >
      Login / Register
    </button>

    <transition
      enter-active-class="animate-growDown"
      leave-active-class="animate-shrinkUp"
    >
      <div
        v-if="isRegisterListOpen"
        class="absolute bottom-7 origin-bottom flex-col bg-white px-6"
      >
        <div class="py-1">
          <a
            @click="routeClickHandler('/saved-recipes')"
            class="cursor-pointer font-semibold text-gray-500 transition-all duration-500 hover:text-light-green"
          >
            Saved recipes
          </a>
        </div>
        <hr />
        <button
          @click="logOutClickHandler"
          class="py-2 font-semibold text-gray-500 transition-all duration-500 hover:text-light-green"
        >
          Logout
        </button>
      </div>
    </transition>

    <button
      v-if="storeAuth.userData.uid"
      @click="isRegisterListOpen = !isRegisterListOpen"
      type="button"
      class="mt-0 px-6 text-xl font-semibold text-gray-500 hover:text-light-green"
    >
      {{ storeAuth.userData.login }}
      <font-awesome-icon icon="fa-solid fa-angle-up" />
    </button>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useStoreAuth } from "@/stores/storeAuth"
import { useStoreRecipes } from "@/stores/storeRecipes"
import { useRouter } from "vue-router"

const storeAuth = useStoreAuth()
const storeRecipes = useStoreRecipes()

const isRegisterListOpen = ref<Boolean>(false)

const logOutClickHandler = (): void => {
  storeAuth.logoutUser()
  isRegisterListOpen.value = false
  storeRecipes.isNavOpen = false
}

const router = useRouter()

const routeClickHandler = (route: string) => {
  router.push(route)
  storeRecipes.isNavOpen = false
}
</script>
