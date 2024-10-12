<template>
  <nav class="lg:mx-[28px] xl:mx-[32px] fixed z-20 lg:w-16 lg:py-8 lg:h-screen">
    <ul
      class="nav-menu bg-gray-300/50 lg:h-full rounded-2xl lg:grid lg:justify-items-center lg:content-center lg:gap-32"
    >
      <li>
        <nuxt-link to="/">
          <Icon name="mdi:home" class="text-white text-4xl"
        /></nuxt-link>
      </li>
      <li>
        <nuxt-link to="/">
          <Icon name="mdi:movie-play" class="text-white text-4xl"
        /></nuxt-link>
      </li>
      <li>
        <nuxt-link to="/">
          <Icon name="mdi:tv-classic" class="text-white text-4xl"
        /></nuxt-link>
      </li>
      <li>
        <nuxt-link to="/">
          <Icon name="mdi:favorite" class="text-white text-4xl"
        /></nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script setup></script>
