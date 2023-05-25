<template>
  <button
    type="button"
    class="hidden h-9 text-lg font-semibold text-gray-500 transition-all duration-500 hover:text-light-green lg:block"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "logo-block-btn",
}
</script>
