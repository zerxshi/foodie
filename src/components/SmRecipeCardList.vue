<template>
  <div class="flex max-w-xl flex-col gap-7 md:max-w-2xl lg:mr-10 xl:max-w-4xl">
    <sm-recipe-card
      v-for="recipe in recipesPortion"
      :key="recipe"
      :imageSource="recipe.image"
      :recipeTitle="recipe.name"
      :recipeDescription="recipe.description"
      :recipeId="recipe.id"
    />
    <vue-awesome-paginate
      v-if="totalItems > 6"
      :total-items="totalItems"
      :items-per-page="6"
      :hidePrevNext="true"
      :showBreakpointButtons="false"
      v-model="currentPage"
      :on-click="onClick"
      paginate-buttons-class="h-8 w-8 bg-gray-300 text-xs font-semibold text-gray-700 transition-all duration-500 hover:bg-light-green hover:text-white"
      pagination-container-class="flex gap-2"
      active-page-class="bg-light-green text-white"
      class="mt-5"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

const props = defineProps({
  recipesPortion: {
    type: Array,
    required: true,
  },
  totalItems: {
    type: Number,
    required: true,
  },
  onClick: {
    type: Function,
    required: true,
  },
})

const currentPage = ref(1)
</script>
