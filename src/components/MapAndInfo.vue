<template>
  <div class="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-0">
    <div class="flex flex-col gap-5 xl:w-72">
      <span class="flex gap-4">
        <font-awesome-icon
          icon="fa-solid fa-location-dot"
          class="text-2xl text-light-green"
        />
        <p class="text-base text-gray-500">
          1481 Creekside Lane Avila Beach, CA 931
        </p>
      </span>
      <span class="flex gap-4">
        <font-awesome-icon
          icon="fa-solid fa-mobile-screen-button"
          class="text-2xl text-light-green"
        />
        <p class="text-base text-gray-500">+53 345 7953 32453</p>
      </span>
      <span class="flex gap-4">
        <font-awesome-icon
          icon="fa-regular fa-envelope-open"
          class="text-2xl text-light-green"
        />
        <p class="text-base text-gray-500">foodie@gmail.com</p>
      </span>
    </div>
    <GoogleMap
      api-key="AIzaSyAnLW2KLICB9TRMcOoMVFjNkUFx6-9V47U"
      class="h-400 w-full xl:w-570"
      :center="center"
      :zoom="15"
    >
      <Marker :options="{ position: center }" />
    </GoogleMap>
  </div>
</template>

<script lang="ts">
export default {
  name: "map-and-info",
}
</script>

<script setup lang="ts">
import { GoogleMap, Marker } from "vue3-google-map"

const center = { lat: 34.052235, lng: -118.243683 }
</script>
