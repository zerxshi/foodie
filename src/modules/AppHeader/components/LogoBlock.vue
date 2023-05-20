<template>
  <div class="flex items-center">
    <img
      @click="$router.push('/')"
      class="h-28 w-28 cursor-pointer"
      src="@/assets/logo.png"
      alt="logo"
    />

    <logo-block-btn
      v-if="!storeAuth.userData.uid"
      @click="storeAuth.onModalOpen"
    >
      Login / Register
    </logo-block-btn>

    <logo-block-btn class="group" v-else>
      {{ storeAuth.userData.login }}
      <font-awesome-icon icon="fa-solid fa-angle-down" class="h-4" />
      <div
        class="absolute z-2 hidden origin-top-center animate-growOut flex-col bg-white shadow-2xl group-hover:flex"
      >
        <logo-block-btn
          @click="$router.push('/saved-recipes')"
          class="p-2 text-sm"
          >Saved recipes</logo-block-btn
        >
        <hr />
        <logo-block-btn @click="storeAuth.logoutUser" class="p-2 text-sm"
          >Logout</logo-block-btn
        >
      </div>
    </logo-block-btn>
  </div>
</template>

<script setup lang="ts">
import { useStoreAuth } from "@/stores/storeAuth"

const storeAuth = useStoreAuth()
</script>
