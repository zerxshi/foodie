<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    class="h-14 border border-b-2 border-gray-300 py-4 px-7 text-sm font-semibold text-gray-400 outline-none transition-all duration-500 placeholder:text-xs placeholder:text-gray-500 focus:border-b-light-green"
  />
</template>

<script lang="ts">
export default {
  name: "registration-modal-input",
}
</script>

<script setup lang="ts">
const props = defineProps({
  modelValue: String,
})

const emits = defineEmits(["update:modelValue"])
</script>
