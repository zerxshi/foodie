<template>
  <div class="relative text-center transition-all duration-500 myContainer">
    <img :src="imageSource" alt="image" />
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-1/2 h-1/2 flex justify-center items-center transition-all duration-500 outerDiv"
      :class="{ 'w-1/2': slide, 'w-2/3': !slide }"
    >
      <div
        class="w-3/4 h-3/4 border-2 border-light-green flex flex-col justify-center items-center font-bold transition-all duration-500 innerDiv"
      >
        <p class="text-light-green transition-all duration-500 slideContent">
          {{ cardContent }}
        </p>
        <p
          class="transition-all duration-500 slideTitle"
          :class="{ 'text-2xl': slide, 'text-xl': !slide }"
        >
          {{ cardTitle }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "image-card",
  props: {
    imageSource: {
      type: String,
      required: true,
    },
    cardContent: String,
    cardTitle: String,
    slide: Boolean,
  },
}
</script>

<style scoped>
.myContainer:hover .outerDiv {
  background-color: #b0c364;
}
.myContainer:hover .innerDiv {
  border-color: white;
}
.myContainer:hover .slideContent {
  color: white;
}

.myContainer:hover .slideTitle {
  color: white;
}
</style>
