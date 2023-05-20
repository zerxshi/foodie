<template>
  <div
    class="relative flex flex-col gap-4 bg-light-green p-8 lg:w-72 xl:max-h-96 xl:w-90"
  >
    <p class="p-2 text-lg font-semibold text-white">Info</p>

    <div class="flex w-full flex-col gap-6 pb-4">
      <recipe-info-row
        ><font-awesome-icon
          icon="fa-solid fa-stopwatch"
          class="text-2xl text-gray-800"
        />
        <p>{{ exactRecipe.info[0] }}</p>
      </recipe-info-row>
      <recipe-info-row
        ><font-awesome-icon
          icon="fa-solid fa-bowl-food"
          class="text-2xl text-gray-800"
        />
        <p>{{ exactRecipe.info[1] }}</p>
      </recipe-info-row>
      <recipe-info-row
        ><font-awesome-icon
          icon="fa-solid fa-bowl-rice"
          class="text-2xl text-gray-800"
        />
        <p>{{ exactRecipe.info[2] }}</p>
      </recipe-info-row>
      <recipe-info-row v-if="exactRecipe.info[3] != 0"
        ><font-awesome-icon
          icon="fa-solid fa-temperature-low"
          class="text-2xl text-gray-800"
        />
        <p>{{ exactRecipe.info[3] }}</p>
      </recipe-info-row>
    </div>

    <div
      v-if="storeAuth.userData.uid"
      @click="onClickHandler"
      class="absolute bottom-3 right-8 flex items-center gap-2"
    >
      <font-awesome-icon
        v-if="!isSavedRecipe"
        icon="fa-regular fa-heart"
        class="text-lg text-gray-800 hover:text-white"
      />
      <font-awesome-icon
        v-if="isSavedRecipe"
        icon="fa-solid fa-heart"
        class="text-lg text-white"
      />
      <p
        v-if="!isSavedRecipe"
        class="cursor-pointer font-semibold text-gray-800"
      >
        Save it
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStoreAuth } from "@/stores/storeAuth"
import { useStoreRecipes } from "@/stores/storeRecipes"
import { onMounted, onUpdated, ref } from "vue"

const props = defineProps({
  exactRecipe: {
    type: Object,
    required: true,
  },
})

const storeAuth = useStoreAuth()
const storeRecipes = useStoreRecipes()

let isSavedRecipe = ref<Boolean>(false)

const onClickHandler = (): void => {
  if (!isSavedRecipe.value) {
    saveRecipe()
  } else {
    deleteRecipe()
  }
}

const saveRecipe = (): void => {
  storeRecipes.saveRecipe(props.exactRecipe)
  isSavedRecipe.value = true
}

const deleteRecipe = (): void => {
  storeRecipes.deleteRecipe(props.exactRecipe!.id)
  isSavedRecipe.value = false
}

const findSavedRecipe = (): void => {
  storeRecipes.savedRecipes.forEach((recipe) => {
    if (recipe.id == props.exactRecipe!.id) {
      isSavedRecipe.value = true
    }
  })
}

onMounted(findSavedRecipe)
</script>
