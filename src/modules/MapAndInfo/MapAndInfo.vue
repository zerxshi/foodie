<template>
  <div>
    <Info-text />
    <div class="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-0">
      <Contact-info />
      <GoogleMap
        api-key="AIzaSyAnLW2KLICB9TRMcOoMVFjNkUFx6-9V47U"
        class="h-400 w-full xl:w-570"
        :center="center"
        :zoom="15"
      >
        <Marker :options="{ position: center }" />
      </GoogleMap>
    </div>
  </div>
</template>

<script setup lang="ts">
import InfoText from "@/modules/MapAndInfo/components/InfoText.vue"
import ContactInfo from "@/modules/MapAndInfo/components/ContactInfo.vue"
import { GoogleMap, Marker } from "vue3-google-map"

const center = { lat: 34.052235, lng: -118.243683 }
</script>
