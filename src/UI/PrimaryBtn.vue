<template>
  <button
    class="h-12 w-40 bg-light-green font-medium text-white transition-all duration-500 hover:bg-black"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "primary-btn",
}
</script>
