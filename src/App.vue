<template>
  <App-header />
  <router-view />
  <Registration-modal />
  <App-footer />
</template>

<script setup lang="ts">
import AppHeader from "@/modules/AppHeader/AppHeader.vue"
import AppFooter from "@/modules/AppFooter/AppFooter.vue"
import RegistrationModal from "@/modules/RegistrationModal/RegistrationModal.vue"
import { useStoreRecipes } from "@/stores/storeRecipes"
import { onMounted } from "vue"

const storeRecipes = useStoreRecipes()

onMounted(() => {
  storeRecipes.getRecipes()
})
</script>
