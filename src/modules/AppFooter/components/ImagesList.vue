<template>
  <div class="mt-16 flex flex-wrap justify-center">
    <inst-image v-for="image in instImages" :key="image" :imageSource="image" />
  </div>
</template>

<script setup lang="ts">
import InstImage from "@/modules/AppFooter/components/InstImage.vue"
import { ref } from "vue"

const instImages = ref<string[]>([
  "https://cdn.pixabay.com/photo/2015/05/07/15/08/cookie-756601_960_720.jpg",

  "https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971552_960_720.jpg",

  "https://cdn.pixabay.com/photo/2015/07/12/14/26/coffee-842020_960_720.jpg",

  "https://cdn.pixabay.com/photo/2017/01/16/17/45/pancake-1984716_960_720.jpg",

  "https://cdn.pixabay.com/photo/2016/09/15/19/24/salad-1672505_960_720.jpg",

  "https://cdn.pixabay.com/photo/2016/03/05/19/02/salmon-1238248_960_720.jpg",

  "https://cdn.pixabay.com/photo/2018/10/14/18/29/meatloaf-3747129_960_720.jpg",

  "https://cdn.pixabay.com/photo/2017/03/10/13/57/cooking-2132874_960_720.jpg",

  "https://cdn.pixabay.com/photo/2014/08/14/14/21/shish-kebab-417994_960_720.jpg",

  "https://cdn.pixabay.com/photo/2016/11/23/18/31/pasta-1854245_960_720.jpg",
])
</script>
