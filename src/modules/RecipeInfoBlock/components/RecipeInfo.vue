<template>
  <section
    class="relative flex flex-col gap-4 bg-light-green p-8 lg:w-72 xl:max-h-96 xl:w-90"
  >
    <h2 class="p-2 text-xl font-semibold text-white">Info</h2>

    <section class="flex w-full flex-col gap-6 pb-4">
      <recipe-info-row>
        <dt>
          <font-awesome-icon
            icon="fa-solid fa-stopwatch"
            class="text-2xl text-gray-800"
          />
        </dt>
        <dd>
          <label for="time" class="sr-only">Cooking time</label>
          <p id="time">{{ exactRecipe.info[0] }}</p>
        </dd>
      </recipe-info-row>

      <recipe-info-row>
        <dt>
          <font-awesome-icon
            icon="fa-solid fa-bowl-food"
            class="text-2xl text-gray-800"
          />
        </dt>
        <dd>
          <label for="servings" class="sr-only">Servings</label>
          <p id="servings">{{ exactRecipe.info[1] }}</p>
        </dd>
      </recipe-info-row>

      <recipe-info-row>
        <dt>
          <font-awesome-icon
            icon="fa-solid fa-bowl-rice"
            class="text-2xl text-gray-800"
          />
        </dt>
        <dd>
          <label for="complexity" class="sr-only"
            >The complexity of cooking</label
          >
          <p id="complexity">{{ exactRecipe.info[2] }}</p>
        </dd>
      </recipe-info-row>

      <recipe-info-row v-if="exactRecipe.info[3] != 0">
        <dt>
          <font-awesome-icon
            icon="fa-solid fa-temperature-low"
            class="text-2xl text-gray-800"
          />
        </dt>
        <dd>
          <label for="temperature" class="sr-only">Cooking temperature</label>
          <p id="temperature">{{ exactRecipe.info[3] }}</p>
        </dd>
      </recipe-info-row>
    </section>

    <dl
      v-if="storeAuth.userData.uid"
      @click="onClickHandler"
      class="absolute bottom-3 right-8 flex items-center gap-2"
    >
      <dt>
        <button type="button" class="flex items-center">
          <font-awesome-icon
            v-if="!isSavedRecipe"
            icon="fa-regular fa-heart"
            class="text-lg text-gray-800 hover:text-white"
          />
        </button>
        <button type="button" class="flex items-center">
          <font-awesome-icon
            v-if="isSavedRecipe"
            icon="fa-solid fa-heart"
            class="text-lg text-white"
          />
        </button>
      </dt>
      <dd>
        <button
          v-if="!isSavedRecipe"
          type="button"
          class="font-semibold text-gray-800 hover:text-white"
        >
          Save it
        </button>
      </dd>
    </dl>
  </section>
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
