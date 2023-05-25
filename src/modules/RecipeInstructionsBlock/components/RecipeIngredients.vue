<template>
  <section>
    <div class="flex flex-col gap-4 bg-blue-50 p-8 lg:w-72 xl:w-90">
      <h2 class="p-2 text-xl font-semibold">Ingredients</h2>

      <section class="flex w-full flex-col gap-6">
        <check-box v-for="ingredient in ingredients" :key="ingredient">{{
          ingredient
        }}</check-box>
      </section>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps({
  ingredients: {
    type: Array,
    required: true,
  },
})
</script>
