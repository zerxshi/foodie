<template>
  <div class="relative">
    <img src="@/assets/pattern.png" alt="patternImg" class="h-400 w-72" />
    <div class="absolute left-0 top-0 flex h-400 w-72 flex-col gap-5 py-8">
      <input
        type="email"
        placeholder="Ingredients"
        class="h-12 w-full border border-b-2 border-gray-300 px-7 text-sm font-semibold outline-none transition-all duration-500 placeholder:text-xs placeholder:text-gray-500 focus:border-b-light-green"
      />
      <input
        type="email"
        placeholder="Filters"
        class="h-12 w-full border border-b-2 border-gray-300 px-7 text-sm font-semibold outline-none transition-all duration-500 placeholder:text-xs placeholder:text-gray-500 focus:border-b-light-green"
      />
      <primary-btn class="mt-auto w-full">Search</primary-btn>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
