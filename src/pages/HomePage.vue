<template>
  <Carousel />
  <div class="m-4 flex flex-col items-center justify-center">
    <Recommendations />
    <Recipes-list />
  </div>
</template>

<script setup lang="ts">
import Carousel from "@/components/Carousel.vue"
import Recommendations from "@/components/Recommendations.vue"
import RecipesList from "@/components/RecipesList.vue"
</script>
