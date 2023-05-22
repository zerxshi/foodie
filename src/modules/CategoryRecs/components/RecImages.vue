<template>
  <div class="mt-6 flex flex-col items-center justify-center gap-7 lg:flex-row">
    <div class="flex flex-col gap-7 md:flex-row">
      <image-card
        :imageSource="'https://cdn.pixabay.com/photo/2016/11/06/23/31/breakfast-1804457_960_720.jpg'"
        :cardType="'THE BEST'"
        :cardTitle="'Vegetarian'"
        :slide="false"
        class="md:w-90 lg:w-72 xl:w-90"
      />
      <image-card
        :imageSource="'https://cdn.pixabay.com/photo/2022/06/07/20/52/curry-7249247_960_720.jpg'"
        :cardType="'THE BEST'"
        :cardTitle="'Dinner'"
        :slide="false"
        class="md:w-90 lg:w-72 xl:w-90"
      />
    </div>
    <image-card
      :imageSource="'https://cdn.pixabay.com/photo/2017/03/27/13/54/bread-2178874_960_720.jpg'"
      :cardType="'THE BEST'"
      :cardTitle="'Asian Cuisine'"
      :slide="false"
      class="md:w-90 lg:w-72 xl:w-90"
    />
  </div>
</template>

<script setup lang="ts"></script>
