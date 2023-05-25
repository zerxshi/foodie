<template>
  <form
    @submit.prevent="storeAuth.onSubmit"
    class="m-5 flex flex-col items-center gap-5"
  >
    <label for="email" class="sr-only">Email</label>
    <registration-modal-input
      :modelValue="storeAuth.credentials.email"
      @update:modelValue="
        (newValue) => (storeAuth.credentials.email = newValue)
      "
      id="email"
      type="email"
      placeholder="E-mail"
    />
    <label for="login" class="sr-only">Login</label>
    <registration-modal-input
      v-if="storeAuth.register"
      :modelValue="storeAuth.credentials.login"
      @update:modelValue="
        (newValue) => (storeAuth.credentials.login = newValue)
      "
      id="login"
      type="text"
      placeholder="Login"
    />
    <label for="password" class="sr-only">Password</label>
    <registration-modal-input
      :modelValue="storeAuth.credentials.password"
      @update:modelValue="
        (newValue) => (storeAuth.credentials.password = newValue)
      "
      id="password"
      type="password"
      placeholder="Password"
    />

    <p v-if="storeAuth.validationError" class="text-base">
      Please fill in all fields!
    </p>

    <button
      type="submit"
      class="mt-2 h-14 w-56 bg-light-green text-white transition-all duration-500 hover:bg-black"
    >
      Submit
    </button>

    <div class="mt-4 flex gap-8 text-2xl text-gray-800">
      <label for="google" class="sr-only">Sign in with google</label>
      <font-awesome-icon
        @click="storeAuth.signWithGoogle"
        icon="fa-brands fa-google"
        id="google"
      />
      <label for="twitter" class="sr-only">Sign in with twitter</label>
      <font-awesome-icon
        @click="storeAuth.signWithTwitter"
        icon="fa-brands fa-twitter"
        id="twitter"
      />
      <label for="facebook" class="sr-only">Sign in with facebook</label>
      <font-awesome-icon
        @click="storeAuth.signWithFacebook"
        icon="fa-brands fa-facebook-f"
        id="facebook"
      />
    </div>
  </form>
</template>

<script setup lang="ts">
import { useStoreAuth } from "@/stores/storeAuth"

const storeAuth = useStoreAuth()
</script>
