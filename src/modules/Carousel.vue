<template>
  <carousel :items-to-show="1" :wrap-around="true" :breakpoints="breakPoints">
    <slide v-for="(n, index) in 6" :key="n">
      <image-card
        :imageSource="storeRecipes.recipes[index].image"
        :cardType="storeRecipes.recipes[index].type"
        :cardTitle="storeRecipes.recipes[index].name"
        :cardId="storeRecipes.recipes[index].id"
        :slide="true"
      />
    </slide>

    <template #addons>
      <navigation class="text-black" />
    </template>
  </carousel>
</template>

<script setup lang="ts">
import "vue3-carousel/dist/carousel.css"
import { Carousel, Slide, Navigation } from "vue3-carousel"
import { onMounted, ref } from "vue"
import { useStoreRecipes } from "@/stores/storeRecipes"

const storeRecipes = useStoreRecipes()

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
  padding: 20px;
}

@media (min-width: 1610px) {
  .carousel__slide {
    padding: 31px;
  }
}

.carousel__slide--prev {
  pointer-events: none;
  filter: brightness(65%);
}

.carousel__slide--next {
  pointer-events: none;
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
