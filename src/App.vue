<template>
  <App-header />
  <router-view />
  <App-footer />
</template>

<script setup lang="ts">
import AppHeader from "@/components/AppHeader.vue"
import AppFooter from "@/components/AppFooter.vue"
import { onMounted } from "@vue/runtime-core"
import { useStoreRecipes } from "@/stores/storeRecipes"

const storeRecipes = useStoreRecipes()

// onMounted(storeRecipes.getRecipes)
</script>
