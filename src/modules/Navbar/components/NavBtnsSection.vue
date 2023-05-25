<template>
  <section class="w-full">
    <nav-link-container>
      <navbar-link @click="routeClickHandler('/')">Home</navbar-link>
    </nav-link-container>

    <nav-link-container>
      <navbar-link @click="routeClickHandler('/contact')"
        >Contact us</navbar-link
      >
    </nav-link-container>

    <nav-link-container>
      <button
        @click="isCategoryListOpen = !isCategoryListOpen"
        type="button"
        class="group text-lg font-semibold text-slate-800 transition-all duration-300 hover:text-light-green"
      >
        Categories
        <font-awesome-icon
          icon="fa-solid fa-angle-down"
          class="text-base text-slate-600 group-hover:text-light-green"
        />
      </button>
    </nav-link-container>

    <transition
      enter-active-class="animate-growDown"
      leave-active-class="animate-shrinkUp"
    >
      <div class="origin-top-center bg-white" v-if="isCategoryListOpen">
        <sm-nav-link-container>
          <navbar-link @click="routeClickHandler('/meals')" class="text-sm"
            >Meal type</navbar-link
          >
        </sm-nav-link-container>

        <hr />

        <sm-nav-link-container>
          <navbar-link @click="routeClickHandler('/dishes')" class="text-sm"
            >Dish type</navbar-link
          ></sm-nav-link-container
        >

        <hr />

        <sm-nav-link-container>
          <navbar-link @click="routeClickHandler('/cuisines')" class="text-sm"
            >Cuisine type</navbar-link
          >
        </sm-nav-link-container>
      </div>
    </transition>
  </section>
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
