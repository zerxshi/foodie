<template>
  <button
    class="h-9 text-sm font-semibold text-gray-500 transition-all duration-500 hover:text-light-green"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "reg-nav-btn",
}
</script>
