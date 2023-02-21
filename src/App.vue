<template>
  <Header />
  <router-view />
</template>

<script setup lang="ts">
import Header from "@/components/AppHeader.vue"
import { onMounted } from "@vue/runtime-core"
import { useStoreRecipes } from "@/stores/storeRecipes"

const storeRecipes = useStoreRecipes()

// onMounted(storeRecipes.getRecipes)
</script>
