<template>
  <a
    class="m-3 cursor-pointer text-center text-lg font-semibold text-slate-800 transition-all duration-300 hover:text-light-green"
  >
    <slot />
  </a>
</template>

<script>
export default {
  name: "header-link",
}
</script>
