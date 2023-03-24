import { createRouter, createWebHistory } from "vue-router"
import HomePage from "@/pages/HomePage.vue"
import MealsPage from "@/pages/MealsPage.vue"
import CuisinesPage from "@/pages/CuisinesPage.vue"
import DishesPage from "@/pages/DishesPage.vue"
import CategoryPage from "@/pages/CategoryPage.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
      path: "/category",
      name: "category",
      component: CategoryPage,
    },
  ],
})

export default router
