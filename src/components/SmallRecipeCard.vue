<template>
  <div class="flex items-start justify-center gap-9">
    <img
      @click="$router.push(`/recipe/${recipeId}`)"
      :src="imageSource"
      alt="recipeCardImg"
      class="w-48 md:w-72 lg:w-60 xl:w-80"
    />
    <div class="flex flex-col items-start gap-3">
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
        class="text-left text-lg font-semibold xl:text-2xl"
      >
        {{ recipeTitle }}
      </button>
      <p class="text-sm text-gray-500">
        {{ recipeDescription }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "sm-recipe-card",
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
})

const storeFilters = useStoreFilters()
</script>
