<template>
  <nav class="hidden lg:block">
    <header-link @click="$router.push('/')">Home</header-link>

    <div class="relative m-3 inline-block">
      <div class="group transition-all duration-300">
        <span
          class="flex items-center text-lg font-semibold text-slate-800 hover:text-light-green"
        >
          <h3 class="cursor-pointer">Categories</h3>
          <font-awesome-icon icon="fa-solid fa-angle-down" class="ml-1 h-4" />
        </span>

        <div
          class="absolute z-2 hidden origin-top-center animate-growOut flex-col bg-white shadow-2xl group-hover:flex"
        >
          <header-link @click="$router.push('/meals')" class="text-sm"
            >Meal type</header-link
          >
          <hr />
          <header-link @click="$router.push('/dishes')" class="text-sm"
            >Dish type</header-link
          >
          <hr />
          <header-link @click="$router.push('/cuisines')" class="text-sm"
            >Cuisine type</header-link
          >
        </div>
      </div>
    </div>

    <header-link @click="$router.push('/contact')">Contact us</header-link>
  </nav>
</template>
