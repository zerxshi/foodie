<template>
  <article
    class="mt-16 flex flex-col items-center justify-center gap-9 md:flex-row"
    :class="{
      'flex-col-reverse': !textRight,
      'md:flex-row-reverse': !textRight,
    }"
  >
    <a @click="$router.push(`/recipe/${recipeId}`)">
      <img
        :src="imageSource"
        alt="recipeCardImg"
        class="cursor-pointer md:max-w-xs lg:max-w-md xl:max-w-xl"
      />
    </a>
    <div class="flex flex-col items-center gap-3">
      <a
        @click="
          $router.push(`/category/${storeFilters.splitCategory(recipeType)}`)
        "
        class="cursor-pointer text-xs font-semibold text-light-green"
      >
        {{ recipeType }}
      </a>

      <a @click="$router.push(`/recipe/${recipeId}`)" class="cursor-pointer">
        <h2 class="text-lg font-semibold lg:text-2xl">
          {{ recipeTitle }}
        </h2>
      </a>

      <p class="text-center text-gray-500">
        {{ recipeDescription }}
      </p>
      <primary-link @click="$router.push(`/recipe/${recipeId}`)" class="mt-4"
        >Go to recipe</primary-link
      >
    </div>
  </article>
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
