<template>
  <div class="mx-4 mt-12 flex justify-center">
    <div class="flex flex-col items-center lg:flex-row lg:items-start">
      <div
        class="flex max-w-lg flex-col gap-10 md:max-w-2xl lg:mr-10 xl:max-w-4xl"
      >
        <div class="flex flex-col gap-9">
          <p class="text-2xl font-semibold">We love seeing your feedback</p>
          <p class="text-base text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            tristique justo id elit bibendum pharetra non vitae lectus. Mauris
            libero felis, dapibus a ultrices sed, commodo vitae odio. Sed auctor
            tellus quis arcu tempus. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Etiam ac tincidunt nunc. Cras sed mollis erat.
          </p>
        </div>
        <Map-and-info />
        <Contact-form />
      </div>
      <Side-bar :isHomePage="false" />
    </div>
  </div>
</template>

<script setup lang="ts">
import MapAndInfo from "@/components/MapAndInfo.vue"
import ContactForm from "@/components/ContactForm.vue"
import SideBar from "@/components/SideBar.vue"
</script>
