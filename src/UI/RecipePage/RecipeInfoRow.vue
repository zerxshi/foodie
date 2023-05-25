<template>
  <dl
    class="flex w-full gap-3 border border-b-2 border-light-green border-b-gray-400 pb-3 font-semibold text-white"
  >
    <slot />
  </dl>
</template>

<script>
export default {
  name: "recipe-info-row",
}
</script>
