<template>
  <div class="mx-4 mt-12 flex justify-center">
    <div class="flex flex-col lg:flex-row">
      <div
        class="flex max-w-lg flex-col gap-10 md:max-w-2xl lg:mr-10 xl:max-w-4xl"
      >
        <div class="flex flex-col gap-10 lg:flex-row">
          <img
            src="https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg"
            alt="salmonSteak"
            class="lg:h-64 lg:max-w-xs xl:h-96 xl:max-w-md"
          />
          <Recipe-info />
        </div>

        <div class="flex flex-col gap-10 lg:flex-row">
          <Recipe-instructions />
          <Recipe-ingredients />
        </div>
      </div>

      <Side-bar :isHomePage="false" />
    </div>
  </div>
</template>

<script setup lang="ts">
import RecipeInfo from "@/components/RecipeInfo.vue"
import RecipeInstructions from "@/components/RecipeInstructions.vue"
import RecipeIngredients from "@/components/RecipeIngredients.vue"
import SideBar from "@/components/SideBar.vue"
</script>
