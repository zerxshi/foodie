<template>
  <div class="flex justify-center">
    <div class="max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl">
      <div
        class="m-4 mt-12 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-20"
      >
        <image-card
          v-for="card in imageCards"
          :key="card"
          @click="
            $router.push(
              `/category/${storeRecipes.splitCategory(card.cardTitle)}`
            )
          "
          :imageSource="card.imageSource"
          :cardTitle="card.cardTitle"
          :slide="card.slide"
          class="sm:w-60 md:w-80 lg:w-72 xl:w-90"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useStoreRecipes } from "@/stores/storeRecipes"

const storeRecipes = useStoreRecipes()

interface card {
  imageSource: string
  cardTitle: string
  slide: boolean
}

const imageCards = ref<card[]>([
  {
    imageSource:
      "https://cdn.pixabay.com/photo/2016/03/26/23/19/hamburger-1281855_960_720.jpg",
    cardTitle: "American cuisine",
    slide: false,
  },
  {
    imageSource:
      "https://cdn.pixabay.com/photo/2019/02/25/03/57/hot-pot-4018869_960_720.jpg",
    cardTitle: "Asian cuisine",
    slide: false,
  },
  {
    imageSource:
      "https://cdn.pixabay.com/photo/2016/06/03/14/32/cheese-tray-1433504_960_720.jpg",
    cardTitle: "French cuisine",
    slide: false,
  },
  {
    imageSource:
      "https://cdn.pixabay.com/photo/2018/06/19/17/16/antipasto-3484840_960_720.jpg",
    cardTitle: "Italian cuisine",
    slide: false,
  },
  {
    imageSource:
      "https://cdn.pixabay.com/photo/2018/08/03/08/33/food-3581341_960_720.jpg",
    cardTitle: "Japanese cuisine",
    slide: false,
  },
  {
    imageSource:
      "https://cdn.pixabay.com/photo/2019/08/15/10/46/burrito-4407736_960_720.jpg",
    cardTitle: "Mexican cuisine",
    slide: false,
  },
])
</script>
