<template>
  <div class="mt-5 flex gap-4">
    <img :src="imageSource" alt="recipeCardImg" class="w-36 lg:w-20" />
    <div>
      <p class="text-xs font-semibold text-light-green">{{ recipeType }}</p>
      <p class="font-semibold">{{ recipeTitle }}</p>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "sidebar-card",
}
</script>

<script setup lang="ts">
const props = defineProps({
  imageSource: String,
  recipeType: String,
  recipeTitle: String,
})
</script>
