<template>
  <button
    class="m-3 text-lg font-semibold text-slate-800 transition-all duration-300 hover:text-light-green"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "header-btn",
}
</script>
