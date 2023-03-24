<template>
  <div class="mt-7 flex items-start justify-center gap-9">
    <img
      :src="imageSource"
      alt="recipeCardImg"
      class="w-48 md:w-72 lg:w-60 xl:w-80"
    />
    <div class="flex flex-col items-start gap-3">
      <button class="text-xs font-semibold text-light-green">
        {{ recipeType }}
      </button>
      <button class="text-lg font-semibold xl:text-2xl">
        {{ recipeTitle }}
      </button>
      <p class="text-sm text-gray-500">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid vitae
        fugit tempora pariatur deleniti incidunt, nihil maxime totam, quis
        similique consequatur necessitatibus alias deserunt voluptatibus.
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
const props = defineProps({
  imageSource: String,
  recipeType: String,
  recipeTitle: String,
})
</script>
