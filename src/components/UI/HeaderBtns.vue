<template>
  <header-btn>Home</header-btn>
  <div class="relative inline-block">
    <header-btn class="group"
      >Categories
      <font-awesome-icon
        icon="fa-solid fa-angle-down"
        class="text-base text-slate-600 group-hover:text-light-green"
      />
      <div
        class="absolute z-2 hidden flex-col bg-white shadow-2xl transition-all duration-1000 group-hover:flex"
      >
        <header-btn class="text-sm">Meal type</header-btn>
        <hr />
        <header-btn class="text-sm">Dish type</header-btn>
        <hr />
        <header-btn class="text-sm">Cuisine type</header-btn>
      </div>
    </header-btn>
  </div>
  <header-btn>Contact us</header-btn>
</template>

<script>
export default {
  name: "header-btns",
}
</script>
