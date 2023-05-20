<template>
  <div
    class="mt-16 flex flex-col items-center justify-center gap-9 md:flex-row"
    :class="{
      'flex-col-reverse': !textRight,
      'md:flex-row-reverse': !textRight,
    }"
  >
    <img
      @click="$router.push(`/recipe/${recipeId}`)"
      :src="imageSource"
      alt="recipeCardImg"
      class="md:max-w-xs lg:max-w-md xl:max-w-xl"
    />

    <div class="flex flex-col items-center gap-3">
      <button
        @click="
          $router.push(`/category/${storeFilters.splitCategory(recipeType)}`)
        "
        class="text-xs font-semibold text-light-green"
      >
        {{ recipeType }}
      </button>
      <button
        @click="$router.push(`/recipe/${recipeId}`)"
        class="text-lg font-semibold lg:text-2xl"
      >
        {{ recipeTitle }}
      </button>
      <p class="text-center text-gray-500">
        {{ recipeDescription }}
      </p>
      <primary-btn @click="$router.push(`/recipe/${recipeId}`)" class="mt-4"
        >Go to recipe</primary-btn
      >
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "recipe-card",
}
</script>

<script setup lang="ts">
import { useStoreFilters } from "@/stores/storeFilters"

const props = defineProps({
  imageSource: String,
  recipeType: String,
  recipeTitle: String,
  recipeDescription: String,
  recipeId: String,
  textRight: {
    type: Boolean,
    default: true,
  },
})

const storeFilters = useStoreFilters()
</script>
