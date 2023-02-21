<template>
  <Carousel />
  <div class="m-8 flex flex-col items-center justify-center">
    <Recommendations />
    <Recipes-list />
  </div>
  <Images-list />
  <Footer />
</template>

<script setup lang="ts">
import Carousel from "@/components/Carousel.vue"
import Recommendations from "@/components/Recommendations.vue"
import RecipesList from "@/components/RecipesList.vue"
import ImagesList from "@/components/ImagesList.vue"
import Footer from "@/components/AppFooter.vue"
</script>
