<template>
  <div
    class="group relative w-40 overflow-hidden sm:w-32 md:w-36 lg:w-52 xl:w-60 2xl:w-90"
  >
    <img
      :src="imageSource"
      alt="dishImg"
      class="h-full w-full transition-all duration-500 ease-in-out hover:brightness-30 group-hover:scale-110"
    />
    <button
      class="absolute top-1/2 left-1/2 h-9 w-9 -translate-x-1/2 -translate-y-1/2 bg-light-green opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100 lg:h-11 lg:w-11 xl:h-14 xl:w-14"
    >
      <p class="mb-1.5 text-lg font-bold text-white lg:text-2xl xl:text-3xl">
        +
      </p>
    </button>
  </div>
</template>

<script lang="ts">
export default {
  name: "inst-image",
}
</script>

<script setup lang="ts">
const props = defineProps({
  imageSource: String,
})
</script>
