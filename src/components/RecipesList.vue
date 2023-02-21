<template>
  <div class="max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl">
    <recipe-card
      :imageSource="'https://cdn.pixabay.com/photo/2015/05/31/13/59/salad-791891_960_720.jpg'"
      :recipeType="'HEALTHY'"
      :recipeTitle="'Vegetable salad'"
    />
    <recipe-card
      :imageSource="'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg'"
      :recipeType="'SEAFOOD'"
      :recipeTitle="'Salmon steak'"
      :textRight="false"
    />
    <div class="mt-16 flex flex-col items-center lg:flex-row">
      <div class="mr-10 lg:max-w-2xl xl:max-w-4xl">
        <sm-recipe-card
          :imageSource="'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'"
          :recipeType="'DESSERTS'"
          :recipeTitle="'Pancakes'"
          :smallImg="true"
        />
        <sm-recipe-card
          :imageSource="'https://images.pexels.com/photos/2836945/pexels-photo-2836945.jpeg?auto=compress&cs=tinysrgb&w=1600'"
          :recipeType="'DRINKS'"
          :recipeTitle="'Basic cappuccino'"
          :smallImg="true"
        />
        <sm-recipe-card
          :imageSource="'https://cdn.pixabay.com/photo/2018/03/29/12/19/oats-3272113_960_720.jpg'"
          :recipeType="'BREAKFAST'"
          :recipeTitle="'Oatmeal with berries'"
          :smallImg="true"
        />
      </div>
      <div>
        <Side-bar />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SideBar from "@/components/SideBar.vue"
</script>
