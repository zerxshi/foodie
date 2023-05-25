<template>
  <section class="flex flex-col gap-5 xl:w-72">
    <contact-info-row>
      <dt>
        <font-awesome-icon
          icon="fa-solid fa-location-dot"
          class="text-2xl text-light-green"
        />
      </dt>
      <dd>
        <label for="adress" class="sr-only">Adress</label>
        <p id="adress" class="text-gray-500">
          1481 Creekside Lane Avila Beach, CA 931
        </p>
      </dd>
    </contact-info-row>

    <contact-info-row>
      <dt>
        <font-awesome-icon
          icon="fa-solid fa-mobile-screen-button"
          class="text-2xl text-light-green"
        />
      </dt>
      <dd>
        <label for="number" class="sr-only">Phone number</label>
        <a id="number" href="tel:+53345795332453" class="text-gray-500"
          >+53-345-7953-32453</a
        >
      </dd>
    </contact-info-row>

    <contact-info-row>
      <dt>
        <font-awesome-icon
          icon="fa-regular fa-envelope-open"
          class="text-2xl text-light-green"
        />
      </dt>
      <dd>
        <label for="email" class="sr-only">Email</label>
        <p id="email" class="text-gray-500">foodie@gmail.com</p>
      </dd>
    </contact-info-row>
  </section>
</template>

<script setup lang="ts"></script>
