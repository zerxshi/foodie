<template>
  <div
    class="mt-16 flex flex-col items-center justify-center gap-9 md:flex-row"
    :class="{
      'flex-col-reverse': !textRight,

      'md:flex-row-reverse': !textRight,
    }"
  >
    <img
      :src="imageSource"
      alt="recipeCardImg"
      class="md:max-w-xs lg:max-w-md xl:max-w-xl"
    />
    <div class="flex flex-col items-center gap-3">
      <button class="text-xs font-semibold text-light-green">
        {{ recipeType }}
      </button>
      <button class="text-lg font-semibold lg:text-2xl">
        {{ recipeTitle }}
      </button>
      <p class="text-center text-sm text-gray-500 xl:text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus deserunt
        sit doloribus corrupti dolor culpa. Voluptas dolorum, aliquam
        accusantium voluptate aliquid aperiam commodi maxime natus fugit
        blanditiis laboriosam incidunt assumenda nobis expedita quia inventore
        ullam. At autem dicta fugit dolor deserunt! Sapiente veritatis tempore
        exercitationem facere non nobis fugit excepturi harum iusto at iure,
        praesentium quos incidunt earum. Eum, perferendis!
      </p>
      <primary-btn class="mt-4 transition-all duration-500 hover:bg-black"
        >Read More</primary-btn
      >
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "recipe-card",
}
</script>

<script setup lang="ts">
const props = defineProps({
  imageSource: String,
  recipeType: String,
  recipeTitle: String,
  textRight: {
    type: Boolean,
    default: true,
  },
})
</script>
