<template>
  <button
    type="button"
    class="h-10 w-24 border-b-2 border-b-gray-300 transition-all duration-500 hover:border-b-light-green"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "registration-modal-btn",
}
</script>
