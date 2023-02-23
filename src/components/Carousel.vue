<template>
  <carousel :items-to-show="1" :wrap-around="true" :breakpoints="breakPoints">
    <slide v-for="slide in slides" :key="slide">
      <image-card
        :imageSource="slide.image"
        :cardContent="slide.content"
        :cardTitle="slide.title"
        :slide="true"
      />
    </slide>

    <template #addons>
      <navigation class="text-black" />
    </template>
  </carousel>
</template>

<script setup lang="ts">
import { ref } from "vue"
import "vue3-carousel/dist/carousel.css"
import { Carousel, Slide, Navigation } from "vue3-carousel"

const slides = ref<any[]>([
  {
    title: "Burger",
    content: "AMERICAN FOOD",
    image:
      "https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_960_720.jpg",
  },
  {
    title: "Steak",
    content: "MEAT FOOD",
    image:
      "https://cdn.pixabay.com/photo/2017/03/23/19/57/asparagus-2169305_960_720.jpg",
  },
  {
    title: "Chocolate cake",
    content: "DESSERT",
    image:
      "https://cdn.pixabay.com/photo/2016/11/22/18/52/cake-1850011_960_720.jpg",
  },
  {
    title: "Salad",
    content: "VEGETARIAN FOOD",
    image:
      "https://cdn.pixabay.com/photo/2016/08/18/18/40/salad-1603608_960_720.jpg",
  },
  {
    title: "Tacos",
    content: "MEXICAN FOOD",
    image:
      "https://cdn.pixabay.com/photo/2019/12/20/21/17/taco-4709325_960_720.jpg",
  },
  {
    title: "Porridge",
    content: "HEALTHY FOOD",
    image:
      "https://cdn.pixabay.com/photo/2018/02/27/18/41/muesli-3186256_960_720.jpg",
  },
  {
    title: "Pizza",
    content: "ITALIAN FOOD",
    image:
      "https://cdn.pixabay.com/photo/2017/12/05/20/09/pizza-3000274_960_720.jpg",
  },
])

const breakPoints = ref({
  768: {
    itemsToShow: 2,
  },
  1024: {
    itemsToShow: 3,
  },
})
</script>

<style scoped>
.carousel__slide {
  padding: 33px;
}

.carousel__slide--prev {
  filter: brightness(65%);
}

.carousel__slide--next {
  filter: brightness(65%);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}

.carousel__slide--sliding {
  transition: 0.5s;
}
</style>
