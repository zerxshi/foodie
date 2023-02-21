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
    <div class="flex flex-col items-center gap-4">
      <button class="font-medium text-light-green">{{ recipeType }}</button>
      <button class="text-3xl font-semibold md:text-2xl lg:text-3xl">
        {{ recipeTitle }}
      </button>
      <p class="text-center text-lg text-gray-500 md:text-base lg:text-lg">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae amet
        nesciunt, minima ut libero dignissimos quae similique placeat voluptatem
        ad corporis aliquam laudantium maiores natus exercitationem veniam
        labore tempora at earum id odio. Enim aut ratione dolorum tempore
        soluta! Quis provident eos sapiente maiores temporibus, recusandae eaque
        autem impedit pariatur assumenda, obcaecati laudantium asperiores? Rem
        quod asperiores reiciendis dolorem ullam minima similique aperiam
        voluptates quae exercitationem nesciunt quibusdam voluptatem tempora
        nemo eaque tempore odit, cupiditate vel eius laboriosam! Illo, quia!
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
