<template>
  <section class="flex flex-col gap-10 lg:flex-row">
    <Recipe-instructions
      :name="exactRecipe.name"
      :type="exactRecipe.type"
      :steps="exactRecipe.steps"
      :stepNames="exactRecipe.stepNames"
      :stepImages="exactRecipe.stepImages"
    />
    <Recipe-ingredients :ingredients="exactRecipe.ingredients" />
  </section>
</template>

<script setup lang="ts">
import RecipeInstructions from "@/modules/RecipeInstructionsBlock/components/RecipeInstructions.vue"
import RecipeIngredients from "@/modules/RecipeInstructionsBlock/components/RecipeIngredients.vue"

const props = defineProps({
  exactRecipe: {
    type: Object,
    required: true,
  },
})
</script>
