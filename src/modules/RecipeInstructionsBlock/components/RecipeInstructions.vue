<template>
  <section class="flex flex-col items-start gap-2 lg:max-w-xs xl:max-w-md">
    <a
      @click="$router.push(`/category/${storeFilters.splitCategory(type)}`)"
      class="cursor-pointer text-xs font-semibold text-light-green"
      >{{ type }}</a
    >
    <h1 class="text-lg font-semibold lg:text-2xl">{{ name }}</h1>
    <section
      v-for="(step, index) in steps"
      :key="index"
      class="flex flex-col gap-5"
    >
      <h3 class="mt-4 text-xl font-semibold">{{ stepNames[index] }}</h3>
      <p class="text-base text-gray-500">
        {{ step }}
      </p>
      <img :src="stepImages[index]" alt="step image" />
    </section>
  </section>
</template>

<script setup lang="ts">
import type { PropType } from "vue"
import { useStoreFilters } from "@/stores/storeFilters"

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

const storeFilters = useStoreFilters()
</script>
