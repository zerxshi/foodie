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
        <Registration-modal-btns />
        <Registration-modal-inputs />
      </div>
    </transition>
    <Registration-modal-overlay />
  </div>
</template>

<script setup lang="ts">
import RegistrationModalBtns from "@/modules/RegistrationModal/components/RegistrationModalBtns.vue"
import RegistrationModalInputs from "@/modules/RegistrationModal/components/RegistrationModalInputs.vue"
import RegistrationModalOverlay from "@/modules/RegistrationModal/components/RegistrationModalOverlay.vue"
import { useStoreRecipes } from "@/stores/storeRecipes"

const storeRecipes = useStoreRecipes()
</script>
