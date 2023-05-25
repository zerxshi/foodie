<template>
  <section>
    <transition
      enter-active-class="animate-openModal"
      leave-active-class="animate-closeModal"
    >
      <section
        v-if="storeAuth.regModalOpen"
        class="fixed top-1/2 left-1/2 z-50 flex w-90 -translate-x-1/2 -translate-y-1/2 flex-col border border-gray-300 bg-white"
      >
        <Registration-modal-btns />
        <Registration-modal-form />
      </section>
    </transition>
    <Registration-modal-overlay />
  </section>
</template>

<script setup lang="ts">
import RegistrationModalBtns from "@/modules/RegistrationModal/components/RegistrationModalBtns.vue"
import RegistrationModalForm from "@/modules/RegistrationModal/components/RegistrationModalForm.vue"
import RegistrationModalOverlay from "@/modules/RegistrationModal/components/RegistrationModalOverlay.vue"
import { useStoreAuth } from "@/stores/storeAuth"

const storeAuth = useStoreAuth()
</script>
