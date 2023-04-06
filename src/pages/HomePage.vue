<template>
  <Carousel />
  <div class="mx-4 flex flex-col items-center justify-center">
    <Recommendations />
    <Recipes-list />
  </div>
</template>

<script setup lang="ts">
import RandomAndSearch from "@/components/RandomAndSearch.vue"
import Carousel from "@/components/Carousel.vue"
import Recommendations from "@/components/Recommendations.vue"
import RecipesList from "@/components/RecipesList.vue"
</script>
