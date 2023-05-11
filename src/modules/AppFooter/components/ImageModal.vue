<template>
  <div>
    <transition
      enter-active-class="animate-openModal"
      leave-active-class="animate-closeModal"
    >
      <div
        v-if="imageModalOpen"
        class="fixed top-1/2 left-1/2 z-50 w-[470px] -translate-x-1/2 -translate-y-1/2 sm:w-570 md:w-[680px]"
      >
        <div class="relative">
          <img :src="imageSource" alt="dishImg" />
          <font-awesome-icon
            @click="$emit('closeImageModal')"
            icon="fa-solid fa-xmark"
            class="absolute top-0 right-0 h-7 w-7 bg-light-green text-white"
          />
          <div class="absolute bottom-4 left-4 rounded-2xl bg-light-green p-2">
            <p class="text-xs font-semibold text-white">Instagram image</p>
          </div>
        </div>
      </div>
    </transition>
    <Image-modal-overlay
      @closeImageModal="$emit('closeImageModal')"
      :imageModalOpen="imageModalOpen"
    />
  </div>
</template>

<script setup lang="ts">
import ImageModalOverlay from "@/modules/AppFooter/components/ImageModalOverlay.vue"

const props = defineProps({
  imageModalOpen: {
    type: Boolean,
    default: false,
  },
  imageSource: String,
})
</script>
