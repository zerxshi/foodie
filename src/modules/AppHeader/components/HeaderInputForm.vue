<template>
  <form
    @submit.prevent
    class="mb-4 mt-2 flex items-center lg:mt-0 lg:mr-8 lg:mb-0"
  >
    <font-awesome-icon
      icon="fa-solid fa-magnifying-glass"
      class="pointer-events-none absolute z-2 block text-center text-slate-800"
    />
    <input
      v-model="storeFilters.searchQuery"
      @keypress.enter="onPressHandler"
      class="w-72 border-b-2 border-slate-800 pl-5 font-semibold text-slate-800 outline-none placeholder:text-center"
      type="text"
      placeholder="Search recipe by name..."
    />
  </form>
</template>

<script setup lang="ts">
import { useStoreFilters } from "@/stores/storeFilters"
import { useStorePagination } from "@/stores/storePagination"
import { useRoute, useRouter } from "vue-router"

const storeFilters = useStoreFilters()
const storePagination = useStorePagination()
const router = useRouter()
const route = useRoute()

const onPressHandler = (): void => {
  if (
    route.name !== "filtered-recipes" &&
    storeFilters.searchQuery !== "" &&
    storeFilters.searchQuery !== " "
  ) {
    router.push("/filtered-recipes")
  } else {
    storeFilters.searchRecipes()
    storePagination.searchPagePaginationClick(1)
  }
}
</script>
