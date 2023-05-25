<template>
  <article class="mt-5 flex gap-4">
    <a @click="$router.push(`/recipe/${recipeId}`)" class="cursor-pointer">
      <img
        :src="imageSource"
        alt="recipeCardImg"
        class="max-w-[144px] sm:h-20 sm:w-28 md:h-16 md:w-24 lg:h-14 lg:w-20"
      />
    </a>

    <div class="flex flex-col items-start">
      <a
        @click="
          $router.push(`/category/${storeFilters.splitCategory(recipeType)}`)
        "
        class="cursor-pointer text-xs font-semibold text-light-green"
      >
        {{ recipeType }}
      </a>

      <a @click="$router.push(`/recipe/${recipeId}`)" class="cursor-pointer">
        <h3 class="text-left text-sm font-semibold">
          {{ recipeTitle }}
        </h3>
      </a>
    </div>
  </article>
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
