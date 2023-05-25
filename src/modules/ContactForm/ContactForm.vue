<template>
  <form @submit.prevent class="flex flex-col gap-5">
    <p class="mb-2 text-2xl font-semibold">Get In Touch</p>
    <div class="flex flex-col gap-5 lg:flex-row">
      <label for="name" class="sr-only">Name</label>
      <contact-form-input id="name" type="text" placeholder="Name" />
      <label for="Email" class="sr-only">Email</label>
      <contact-form-input id="email" type="email" placeholder="E-mail" />
    </div>
    <label for="message" class="sr-only">Message</label>
    <textarea
      id="message"
      cols="30"
      rows="8"
      placeholder="Message"
      class="border border-b-2 border-gray-300 py-4 px-7 text-sm font-semibold text-gray-400 outline-none transition-all duration-500 placeholder:text-xs placeholder:text-gray-500 focus:border-b-light-green"
    ></textarea>
    <primary-btn type="submit" class="self-end">Send</primary-btn>
  </form>
</template>
