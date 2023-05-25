<template>
  <div
    class="fixed bottom-0 top-0 left-0 right-0 z-50 flex items-center justify-center bg-light-green"
  >
    <half-circle-spinner
      :animation-duration="1000"
      :size="70"
      color="#000000"
    />
  </div>
</template>

<script>
export default {
  name: "loading-spinner",
}
</script>

<script setup>
import { HalfCircleSpinner } from "epic-spinners"
</script>
