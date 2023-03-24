<template>
  <button
    class="h-8 w-8 bg-gray-300 text-xs font-semibold text-gray-700 transition-all duration-500 hover:bg-light-green hover:text-white"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "small-btn",
}
</script>
