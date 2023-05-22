<template>
  <div class="w-full">
    <nav-btn-container>
      <header-btn @click="routeClickHandler('/')" class="m-0">Home</header-btn>
    </nav-btn-container>

    <nav-btn-container>
      <header-btn
        @click="isCategoryListOpen = !isCategoryListOpen"
        class="group m-0"
        >Categories
        <font-awesome-icon
          icon="fa-solid fa-angle-down"
          class="text-base text-slate-600 group-hover:text-light-green"
        />
      </header-btn>
    </nav-btn-container>

    <transition
      enter-active-class="animate-growDown"
      leave-active-class="animate-shrinkUp"
    >
      <div class="origin-top-center bg-white" v-if="isCategoryListOpen">
        <header-btn @click="routeClickHandler('/meals')" class="text-sm"
          >Meal type</header-btn
        >
        <hr />
        <header-btn @click="routeClickHandler('/dishes')" class="text-sm"
          >Dish type</header-btn
        >
        <hr />
        <header-btn @click="routeClickHandler('/cuisines')" class="text-sm"
          >Cuisine type</header-btn
        >
      </div>
    </transition>

    <nav-btn-container>
      <header-btn @click="routeClickHandler('/contact')" class="m-0"
        >Contact us</header-btn
      >
    </nav-btn-container>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useStoreRecipes } from "@/stores/storeRecipes"
import { useRouter } from "vue-router"

const isCategoryListOpen = ref<Boolean>(false)

const storeRecipes = useStoreRecipes()

const router = useRouter()

const routeClickHandler = (route: string) => {
  router.push(route)
  storeRecipes.isNavOpen = false
}
</script>
