<template>
  <div class="flex flex-col gap-10 lg:flex-row">
    <img
      :src="exactRecipe.image"
      alt="salmonSteak"
      class="lg:h-60 lg:max-w-xs xl:h-80 xl:max-w-md"
    />
    <Recipe-info :exactRecipe="exactRecipe" />
  </div>
</template>

<script setup lang="ts">
import RecipeInfo from "@/modules/RecipeInfoBlock/components/RecipeInfo.vue"
import type { PropType } from "vue"
import { useStoreRecipes } from "@/stores/storeRecipes"

const props = defineProps({
  exactRecipe: {
    type: Object,
    required: true,
  },
})

const storeRecipes = useStoreRecipes()
</script>
