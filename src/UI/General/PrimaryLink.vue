<template>
  <a
    class="flex h-12 w-40 cursor-pointer items-center justify-center bg-light-green font-medium text-white transition-all duration-500 hover:bg-black"
  >
    <slot />
  </a>
</template>

<script>
export default {
  name: "primary-link",
}
</script>
