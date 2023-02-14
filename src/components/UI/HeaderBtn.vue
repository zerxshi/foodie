<template>
  <button
    class="text-lg text-slate-700 font-bold m-3 hover:text-light-green transition-all duration-300"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "header-btn",
}
</script>
