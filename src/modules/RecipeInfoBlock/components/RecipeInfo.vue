<template>
  <div
    class="flex flex-col gap-4 bg-light-green p-8 lg:w-72 xl:max-h-96 xl:w-90"
  >
    <p class="p-2 text-lg font-semibold text-white">Info</p>

    <div class="flex w-full flex-col gap-6">
      <recipe-info-row
        ><font-awesome-icon
          icon="fa-solid fa-stopwatch"
          class="text-2xl text-gray-800"
        />
        <p class="text-white">{{ info[0] }}</p>
      </recipe-info-row>
      <recipe-info-row
        ><font-awesome-icon
          icon="fa-solid fa-bowl-food"
          class="text-2xl text-gray-800"
        />
        <p class="text-white">{{ info[1] }}</p>
      </recipe-info-row>
      <recipe-info-row
        ><font-awesome-icon
          icon="fa-solid fa-bowl-rice"
          class="text-2xl text-gray-800"
        />
        <p class="text-white">{{ info[2] }}</p>
      </recipe-info-row>
      <recipe-info-row v-if="info[3] != 0"
        ><font-awesome-icon
          icon="fa-solid fa-temperature-low"
          class="text-2xl text-gray-800"
        />
        <p class="text-white">{{ info[3] }}</p>
      </recipe-info-row>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  info: {
    type: Array,
    required: true,
  },
})
</script>
