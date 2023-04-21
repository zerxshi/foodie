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
      "https://cdn.pixabay.com/photo/2016/11/29/11/48/alcohol-1869282_960_720.jpg",
    cardTitle: "Alcohol cocktail",
    slide: false,
  },
  {
    imageSource:
      "https://cdn.pixabay.com/photo/2018/05/01/18/21/eclair-3366430_960_720.jpg",
    cardTitle: "Dessert",
    slide: false,
  },
  {
    imageSource:
      "https://cdn.pixabay.com/photo/2021/09/20/06/55/spaghetti-6639970_960_720.jpg",
    cardTitle: "Pasta",
    slide: false,
  },
  {
    imageSource:
      "https://cdn.pixabay.com/photo/2014/12/15/13/40/croissants-569075_960_720.jpg",
    cardTitle: "Pastry",
    slide: false,
  },
  {
    imageSource:
      "https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_960_720.jpg",
    cardTitle: "Pizza",
    slide: false,
  },
  {
    imageSource:
      "https://cdn.pixabay.com/photo/2017/07/09/18/29/salad-2487775_960_720.jpg",
    cardTitle: "Salad",
    slide: false,
  },
  {
    imageSource:
      "https://cdn.pixabay.com/photo/2015/04/17/04/42/korean-726741_960_720.jpg",
    cardTitle: "Seafood",
    slide: false,
  },
  {
    imageSource:
      "https://cdn.pixabay.com/photo/2018/03/26/10/40/soup-3262211_960_720.jpg",
    cardTitle: "Soup",
    slide: false,
  },
  {
    imageSource:
      "https://cdn.pixabay.com/photo/2016/11/23/18/31/pasta-1854245_960_720.jpg",
    cardTitle: "Vegetarian",
    slide: false,
  },
])
</script>
