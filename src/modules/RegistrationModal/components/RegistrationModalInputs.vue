<template>
  <div class="flex flex-col items-center gap-5">
    <registration-modal-input type="email" placeholder="E-mail" />
    <registration-modal-input type="text" placeholder="Login" />
    <registration-modal-input type="password" placeholder="Password" />
    <button
      class="h-14 w-56 bg-light-green text-white transition-all duration-500 hover:bg-black"
    >
      Submit
    </button>
  </div>
</template>

<script setup lang="ts"></script>
