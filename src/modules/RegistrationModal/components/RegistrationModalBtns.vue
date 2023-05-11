<template>
  <div class="mt-3 flex justify-center gap-10">
    <registration-modal-btn
      @click="storeAuth.onClickLogin"
      :class="{ 'border-b-light-green': !storeAuth.register }"
    >
      Login
    </registration-modal-btn>
    <registration-modal-btn
      @click="storeAuth.onClickRegister"
      :class="{ 'border-b-light-green': storeAuth.register }"
    >
      Register
    </registration-modal-btn>
  </div>
</template>

<script setup lang="ts">
import { useStoreAuth } from "@/stores/storeAuth"

const storeAuth = useStoreAuth()
</script>
