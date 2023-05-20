<template>
  <div
    @click="chooseRoute(cardId, cardTitle)"
    class="group relative text-center transition-all duration-500"
  >
    <img :src="imageSource" alt="image" />
    <div
      class="outerDiv absolute top-1/2 left-1/2 flex h-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-white transition-all duration-500 group-hover:bg-light-green"
      :class="{ 'w-2/3': slide, 'w-5/6': !slide }"
    >
      <div
        class="flex h-3/4 w-3/4 flex-col items-center justify-center gap-2 border-2 border-light-green transition-all duration-500 group-hover:border-white"
      >
        <button
          class="text-xs font-semibold text-light-green transition-all duration-500 group-hover:text-white"
        >
          {{ cardType }}
        </button>
        <button
          class="text-lg font-semibold transition-all duration-500 group-hover:text-white"
          :class="{ 'xl:text-3xl': slide, 'xl:text-2xl': !slide }"
        >
          {{ cardTitle }}
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "image-card",
}
</script>

<script setup lang="ts">
import { computed } from "@vue/runtime-core"
import { useRouter } from "vue-router"
import { useStoreFilters } from "@/stores/storeFilters"

const props = defineProps({
  imageSource: {
    type: String,
    required: true,
  },
  cardType: String,
  cardTitle: String,
  cardId: String,
  slide: Boolean,
  active: Boolean,
})

const router = useRouter()

const storeFilters = useStoreFilters()

const chooseRoute = (
  id: string | undefined,
  title: string | undefined
): void => {
  if (props.slide && id) {
    router.push(`/recipe/${id}`)
  } else {
    if (title) router.push(`/category/${storeFilters.splitCategory(title)}`)
  }
}
</script>

<style scoped>
.carousel__slide .outerDiv {
  display: none;
}

.carousel__slide--active .outerDiv {
  opacity: 1;
  display: flex;
}
</style>
