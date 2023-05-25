<template>
  <main
    v-if="storeRecipes.recipes.length"
    class="mx-4 mt-12 flex justify-center"
  >
    <section
      class="flex flex-col items-center gap-7 lg:flex-row lg:items-start"
    >
      <section
        class="flex max-w-lg flex-col gap-10 md:max-w-2xl lg:mr-10 xl:max-w-4xl"
      >
        <Map-and-info />
        <Contact-form />
      </section>
      <Side-bar :isHomePage="false" />
    </section>
  </main>
</template>

<script setup lang="ts">
import MapAndInfo from "@/modules/MapAndInfo/MapAndInfo.vue"
import ContactForm from "@/modules/ContactForm/ContactForm.vue"
import SideBar from "@/components/SideBar.vue"
import { useStoreRecipes } from "@/stores/storeRecipes"

const storeRecipes = useStoreRecipes()
</script>
