<template>
  <div>
    <header-btn @click="$router.push('/')">Home</header-btn>
    <div class="relative inline-block">
      <header-btn class="group"
        >Categories
        <font-awesome-icon
          icon="fa-solid fa-angle-down"
          class="text-base text-slate-600 group-hover:text-light-green"
        />
        <div
          class="absolute z-2 hidden origin-top-center animate-growOut flex-col bg-white shadow-2xl group-hover:flex"
        >
          <header-btn @click="$router.push('/meals')" class="text-sm"
            >Meal type</header-btn
          >
          <hr />
          <header-btn @click="$router.push('/dishes')" class="text-sm"
            >Dish type</header-btn
          >
          <hr />
          <header-btn @click="$router.push('/cuisines')" class="text-sm"
            >Cuisine type</header-btn
          >
        </div>
      </header-btn>
    </div>
    <header-btn @click="$router.push('/contact')">Contact us</header-btn>
  </div>
</template>

<script>
export default {
  name: "header-btns",
}
</script>
