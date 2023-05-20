<template>
  <form
    @submit.prevent="storeAuth.onSubmit"
    class="m-5 flex flex-col items-center gap-5"
  >
    <registration-modal-input
      :modelValue="storeAuth.credentials.email"
      @update:modelValue="
        (newValue) => (storeAuth.credentials.email = newValue)
      "
      type="email"
      placeholder="E-mail"
    />
    <registration-modal-input
      v-if="storeAuth.register"
      :modelValue="storeAuth.credentials.login"
      @update:modelValue="
        (newValue) => (storeAuth.credentials.login = newValue)
      "
      type="text"
      placeholder="Login"
    />
    <registration-modal-input
      :modelValue="storeAuth.credentials.password"
      @update:modelValue="
        (newValue) => (storeAuth.credentials.password = newValue)
      "
      type="password"
      placeholder="Password"
    />

    <p v-if="storeAuth.validationError" class="text-base">
      Please fill in all fields!
    </p>

    <button
      class="mt-2 h-14 w-56 bg-light-green text-white transition-all duration-500 hover:bg-black"
    >
      Submit
    </button>

    <div class="mt-4 flex gap-8 text-2xl text-gray-800">
      <font-awesome-icon
        @click="storeAuth.signWithGoogle"
        icon="fa-brands fa-google"
      />
      <font-awesome-icon
        @click="storeAuth.signWithTwitter"
        icon="fa-brands fa-twitter"
      />
      <font-awesome-icon
        @click="storeAuth.signWithFacebook"
        icon="fa-brands fa-facebook-f"
      />
    </div>
  </form>
</template>

<script setup lang="ts">
import { useStoreAuth } from "@/stores/storeAuth"

const storeAuth = useStoreAuth()
</script>
