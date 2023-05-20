import { createRouter, createWebHistory } from "vue-router"
import type { RouteRecordRaw } from "vue-router"
import HomePage from "@/pages/HomePage.vue"
import MealsPage from "@/pages/MealsPage.vue"
import CuisinesPage from "@/pages/CuisinesPage.vue"
import DishesPage from "@/pages/DishesPage.vue"
import CategoryPage from "@/pages/CategoryPage.vue"
import SavedRecipesPage from "@/pages/SavedRecipesPage.vue"
import FilteredRecipesPage from "@/pages/FilteredRecipesPage.vue"
import RecipePage from "@/pages/RecipePage.vue"
import ContactPage from "@/pages/ContactPage.vue"
import { useStoreFilters } from "@/stores/storeFilters"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/meals",
    name: "meals",
    component: MealsPage,
  },
  {
    path: "/cuisines",
    name: "cuisines",
    component: CuisinesPage,
  },
  {
    path: "/dishes",
    name: "dishes",
    component: DishesPage,
  },
  {
    path: "/category/:category",
    name: "category",
    component: CategoryPage,
  },
  {
    path: "/saved-recipes",
    name: "saved-recipes",
    component: SavedRecipesPage,
  },
  {
    path: "/filtered-recipes",
    name: "filtered-recipes",
    component: FilteredRecipesPage,
  },
  {
    path: "/recipe/:recipeId",
    name: "recipe",
    component: RecipePage,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactPage,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

router.afterEach((to, from) => {
  const storeFilters = useStoreFilters()
  if (from.name == "filtered-recipes") storeFilters.searchQuery = ""
})

export default router
