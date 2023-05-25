<template>
  <section class="mx-4 flex justify-center">
    <div class="max-w-lg md:max-w-3xl lg:max-w-5xl xl:max-w-6xl">
      <h1 class="mt-16 text-center text-3xl font-bold">Popular categories</h1>
      <Rec-images />
    </div>
  </section>
</template>

<script setup lang="ts">
import RecImages from "@/modules/CategoryRecs/components/RecImages.vue"
</script>
