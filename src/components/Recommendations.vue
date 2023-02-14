<template>
  <h1 class="text-center text-3xl font-bold mt-16">Popular categories</h1>
  <div
    class="flex flex-col justify-center lg:flex-row xl:gap-7 items-center mt-6"
  >
    <div
      v-for="card in recommendationCards"
      :key="card"
      class="xl:w-96 xl:h-96"
    >
      <image-card
        :imageSource="card.imageSrc"
        :cardContent="card.content"
        :cardTitle="card.title"
        :slide="false"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

const recommendationCards = ref<any[]>([
  {
    imageSrc:
      "https://cdn.pixabay.com/photo/2016/11/06/23/31/breakfast-1804457_960_720.jpg",
    content: "THE BEST",
    title: "Vegetarian Food",
  },
  {
    imageSrc:
      "https://cdn.pixabay.com/photo/2022/06/07/20/52/curry-7249247_960_720.jpg",
    content: "THE BEST",
    title: "Lunch/Dinner",
  },
  {
    imageSrc:
      "https://cdn.pixabay.com/photo/2017/03/27/13/54/bread-2178874_960_720.jpg",
    content: "THE BEST",
    title: "World Cuisine",
  },
])
</script>

<style></style>
