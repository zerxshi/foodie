<template>
  <div class="flex flex-col items-start gap-2 lg:max-w-xs xl:max-w-md">
    <button class="text-xs font-semibold text-light-green">{{ type }}</button>
    <p class="text-lg font-semibold lg:text-2xl">{{ name }}</p>
    <div
      v-for="(step, index) in steps"
      :key="index"
      class="flex flex-col gap-5"
    >
      <h1 class="mt-4 text-xl font-semibold">{{ stepNames[index] }}</h1>
      <p class="text-base text-gray-500">
        {{ step }}
      </p>
      <img :src="stepImages[index]" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from "vue"

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  steps: {
    type: Array,
    required: true,
  },
  stepNames: {
    type: Array,
    required: true,
  },
  stepImages: {
    type: Array as PropType<string[]>,
    required: true,
  },
})
</script>
