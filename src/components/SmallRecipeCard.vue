<template>
  <article class="flex items-start justify-center gap-9">
    <a @click="$router.push(`/recipe/${recipeId}`)">
      <img
        :src="imageSource"
        alt="recipeCardImg"
        class="max-w-[192px] cursor-pointer md:max-w-[288px] lg:max-w-[240px] xl:max-w-xs"
      />
    </a>

    <div class="flex flex-col items-start gap-3">
      <a
        @click="
          $router.push(`/category/${storeFilters.splitCategory(recipeType)}`)
        "
        class="cursor-pointer text-xs font-semibold text-light-green"
      >
        {{ recipeType }}
      </a>

      <a @click="$router.push(`/recipe/${recipeId}`)" class="cursor-pointer">
        <h2 class="text-left text-lg font-semibold xl:text-2xl">
          {{ recipeTitle }}
        </h2>
      </a>

      <p class="text-sm text-gray-500">
        {{ recipeDescription }}
      </p>
    </div>
  </article>
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
