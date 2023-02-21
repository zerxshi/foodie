<template>
  <div class="max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl">
    <h1 class="mt-16 text-center text-3xl font-bold">Popular categories</h1>
    <div
      class="mt-6 flex flex-col items-center justify-center gap-7 lg:flex-row"
    >
      <!-- <div v-for="card in recommendationCards" :key="card" class="xl:w-96">
       
      </div> -->
      <div class="flex flex-col gap-7 md:flex-row">
        <image-card
          :imageSource="'https://cdn.pixabay.com/photo/2016/11/06/23/31/breakfast-1804457_960_720.jpg'"
          :cardContent="'THE BEST'"
          :cardTitle="'Vegetarian Food'"
          :slide="false"
          class="md:w-90 lg:w-72 xl:w-90"
        />
        <image-card
          :imageSource="'https://cdn.pixabay.com/photo/2022/06/07/20/52/curry-7249247_960_720.jpg'"
          :cardContent="'THE BEST'"
          :cardTitle="'Lunch/Dinner'"
          :slide="false"
          class="md:w-90 lg:w-72 xl:w-90"
        />
      </div>
      <image-card
        :imageSource="'https://cdn.pixabay.com/photo/2017/03/27/13/54/bread-2178874_960_720.jpg'"
        :cardContent="'THE BEST'"
        :cardTitle="'World Cuisine'"
        :slide="false"
        class="md:w-90 lg:w-72 xl:w-90"
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
