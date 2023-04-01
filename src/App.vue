<template>
  <App-header />
  <router-view />
  <Sign-modal />
  <App-footer />
</template>

<script setup lang="ts">
import AppHeader from "@/components/AppHeader.vue"
import AppFooter from "@/components/AppFooter.vue"
import SignModal from "@/components/SignModal.vue"
</script>
