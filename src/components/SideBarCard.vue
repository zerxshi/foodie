<template>
  <div class="mt-5 flex gap-4">
    <img
      @click="$router.push(`/recipe/${recipeId}`)"
      :src="imageSource"
      alt="recipeCardImg"
      class="w-36 sm:h-20 sm:w-28 md:h-16 md:w-24 lg:h-14 lg:w-20"
    />
    <div class="flex flex-col items-start">
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
        class="text-left text-sm font-semibold"
      >
        {{ recipeTitle }}
      </button>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "sidebar-card",
}
</script>

<script setup lang="ts">
import { useStoreFilters } from "@/stores/storeFilters"

const props = defineProps({
  imageSource: String,
  recipeType: String,
  recipeTitle: String,
  recipeId: String,
})

const storeFilters = useStoreFilters()
</script>
