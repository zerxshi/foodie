<template>
  <loading-spinner v-if="!storeRecipes.recipes.length" />
  <div v-else>
    <App-header />
    <router-view />
    <Registration-modal />
    <App-footer />
  </div>
</template>

<script setup lang="ts">
import AppHeader from "@/modules/AppHeader/AppHeader.vue"
import AppFooter from "@/modules/AppFooter/AppFooter.vue"
import RegistrationModal from "@/modules/RegistrationModal/RegistrationModal.vue"
import { useStoreRecipes } from "@/stores/storeRecipes"
import { useStoreAuth } from "@/stores/storeAuth"
import { onMounted } from "vue"

const storeRecipes = useStoreRecipes()
const storeAuth = useStoreAuth()

onMounted(() => {
  storeRecipes.getRecipes(), storeAuth.init()
})
</script>
