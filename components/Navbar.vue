<template>
  <nav
    class="w-4/5 lg:w-16 lg:mx-[28px] xl:mx-[32px] fixed bottom-0 left-1/2 transform -translate-x-1/2 z-20 lg:top-0 lg:left-auto lg:translate-x-0 lg:py-8 lg:h-screen"
  >
    <ul
      class="nav-menu bg-gray-300/50 lg:h-full rounded-2xl flex justify-around lg:grid lg:justify-items-center lg:content-center lg:gap-32 mb-4 lg:mb-0"
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
