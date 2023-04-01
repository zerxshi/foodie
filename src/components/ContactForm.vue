<template>
  <div class="flex flex-col gap-5">
    <p class="mb-8 text-2xl font-semibold">Get In Touch</p>
    <div class="flex flex-col gap-5 lg:flex-row">
      <input
        type="text"
        placeholder="Name"
        class="h-14 w-full border border-b-2 border-gray-300 py-4 px-7 text-sm font-semibold text-gray-400 outline-none transition-all duration-500 placeholder:text-xs placeholder:text-gray-500 focus:border-b-light-green"
      />
      <input
        type="email"
        placeholder="Email"
        class="h-14 w-full border border-b-2 border-gray-300 py-4 px-7 text-sm font-semibold text-gray-400 outline-none transition-all duration-500 placeholder:text-xs placeholder:text-gray-500 focus:border-b-light-green"
      />
    </div>
    <textarea
      name=""
      id=""
      cols="30"
      rows="8"
      placeholder="Message"
      class="mb-8 border border-b-2 border-gray-300 py-4 px-7 text-sm font-semibold text-gray-400 outline-none transition-all duration-500 placeholder:text-xs placeholder:text-gray-500 focus:border-b-light-green"
    ></textarea>
    <primary-btn>Send</primary-btn>
  </div>
</template>

<script>
import PrimaryBtn from "./UI/PrimaryBtn.vue"
export default {
  components: { PrimaryBtn },
  name: "contact-form",
}
</script>
