<template>
  <nav class="flex items-center">
    <a @click="$router.push('/')" class="cursor-pointer">
      <img class="h-28 w-28" src="@/assets/logo.png" alt="logo" />
    </a>

    <logo-block-btn
      v-if="!storeAuth.userData.uid"
      @click="storeAuth.onModalOpen"
      type="button"
    >
      Login / Register
    </logo-block-btn>

    <div
      class="group hidden h-9 cursor-pointer transition-all duration-500 lg:block"
      v-else
    >
      <span
        class="flex items-center text-lg font-semibold text-gray-500 hover:text-light-green"
      >
        <h3>
          {{ storeAuth.userData.login }}
        </h3>

        <font-awesome-icon icon="fa-solid fa-angle-down" class="ml-1 h-4" />
      </span>

      <div
        class="absolute z-2 hidden origin-top-center animate-growOut flex-col bg-white shadow-2xl group-hover:flex"
      >
        <logo-block-link
          @click="$router.push('/saved-recipes')"
          class="p-2 text-sm"
          >Saved recipes</logo-block-link
        >

        <hr />

        <logo-block-btn
          @click="storeAuth.logoutUser"
          type="button"
          class="p-2 text-sm"
          >Logout</logo-block-btn
        >
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useStoreAuth } from "@/stores/storeAuth"

const storeAuth = useStoreAuth()
</script>
