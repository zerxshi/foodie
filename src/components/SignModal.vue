<template>
  <div>
    <transition
      enter-active-class="animate-openModal"
      leave-active-class="animate-closeModal"
    >
      <div
        v-if="storeRecipes.isModalOpen"
        class="fixed top-1/2 left-1/2 z-50 h-96 w-90 -translate-x-1/2 -translate-y-1/2 border border-gray-300 bg-white transition-all duration-500 ease-in-out"
      >
        <div class="mb-5 mt-3 flex justify-center gap-10">
          <button
            class="h-10 w-24 border-b-2 border-b-gray-300 transition-all duration-500 hover:border-b-light-green"
          >
            Login
          </button>
          <button
            class="h-10 w-24 border-b-2 border-b-gray-300 transition-all duration-500 hover:border-b-light-green"
          >
            Register
          </button>
        </div>
        <div class="flex flex-col items-center gap-5">
          <input
            type="email"
            placeholder="E-mail"
            class="h-14 border border-b-2 border-gray-300 py-4 px-7 text-sm font-semibold text-gray-400 outline-none transition-all duration-500 placeholder:text-xs placeholder:text-gray-500 focus:border-b-light-green"
          />
          <input
            type="text"
            placeholder="Login"
            class="h-14 border border-b-2 border-gray-300 py-4 px-7 text-sm font-semibold text-gray-400 outline-none transition-all duration-500 placeholder:text-xs placeholder:text-gray-500 focus:border-b-light-green"
          />
          <input
            type="password"
            placeholder="Password"
            class="h-14 border border-b-2 border-gray-300 py-4 px-7 text-sm font-semibold text-gray-400 outline-none transition-all duration-500 placeholder:text-xs placeholder:text-gray-500 focus:border-b-light-green"
          />
          <button
            class="h-14 w-56 bg-light-green text-white transition-all duration-500 hover:bg-black"
          >
            Submit
          </button>
        </div>
      </div>
    </transition>
    <transition leave-active-class="animate-closeModal">
      <div
        v-if="storeRecipes.isModalOpen"
        @click="storeRecipes.isModalOpen = false"
        class="fixed top-0 left-0 right-0 bottom-0 z-40 bg-black bg-opacity-50"
      ></div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { useStoreRecipes } from "@/stores/storeRecipes"

const storeRecipes = useStoreRecipes()
</script>
