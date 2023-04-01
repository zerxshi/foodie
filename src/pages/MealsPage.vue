<template>
  <div class="flex justify-center">
    <div class="max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl">
      <div
        class="m-4 mt-12 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-20"
      >
        <image-card
          :imageSource="'https://cdn.pixabay.com/photo/2017/08/02/00/51/food-2569257_960_720.jpg'"
          :cardTitle="'Breakfast'"
          :slide="false"
          class="sm:w-60 md:w-80 lg:w-72 xl:w-90"
        />
        <image-card
          :imageSource="'https://cdn.pixabay.com/photo/2014/04/05/11/27/buffet-315691_960_720.jpg'"
          :cardTitle="'Lunch/Dinner'"
          :slide="false"
          class="sm:w-60 md:w-80 lg:w-72 xl:w-90"
        />
        <image-card
          :imageSource="'https://cdn.pixabay.com/photo/2016/06/07/17/15/yogurt-1442034_960_720.jpg'"
          :cardTitle="'Snack'"
          :slide="false"
          class="sm:w-60 md:w-80 lg:w-72 xl:w-90"
        />
        <image-card
          :imageSource="'https://cdn.pixabay.com/photo/2017/05/30/12/21/tea-2356770_960_720.jpg'"
          :cardTitle="'Teatime'"
          :slide="false"
          class="sm:w-60 md:w-80 lg:w-72 xl:w-90"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
