<template>
  <div class="w-full">
    <button
      v-if="!storeAuth.userData.uid"
      @click="storeAuth.onModalOpen"
      class="m-0 px-6 font-semibold text-gray-500 hover:text-light-green"
    >
      Login / Register
    </button>

    <button
      v-else
      @click="isRegisterListOpen = !isRegisterListOpen"
      class="m-0 px-6 text-lg font-semibold text-gray-500 hover:text-light-green"
    >
      {{ storeAuth.userData.login }}
      <font-awesome-icon icon="fa-solid fa-angle-down" />
    </button>

    <transition
      enter-active-class="animate-growDown"
      leave-active-class="animate-shrinkUp"
    >
      <div
        v-if="isRegisterListOpen"
        class="absolute origin-top-center flex-col bg-white px-6"
      >
        <button
          @click="$router.push('/saved-recipes')"
          class="h-9 text-sm font-semibold text-gray-500 transition-all duration-500 hover:text-light-green"
        >
          Saved recipes
        </button>
        <hr />
        <button
          @click="logOutClickHandler"
          class="h-9 text-sm font-semibold text-gray-500 transition-all duration-500 hover:text-light-green"
        >
          Logout
        </button>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useStoreAuth } from "@/stores/storeAuth"

const storeAuth = useStoreAuth()

const logOutClickHandler = (): void => {
  storeAuth.logoutUser()
  isRegisterListOpen.value = false
}

const isRegisterListOpen = ref<Boolean>(false)
</script>
