<template>
  <div>
    <nav class="hidden lg:block absolute container z-20 top-9">
      <ul class="text-white text-2xl flex gap-4 font-bold">
        <li>
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">Movies</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">TV Shows</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">Favorites</nuxt-link>
        </li>
      </ul>
    </nav>
    <nav
      class="block lg:hidden w-4/5 fixed bottom-0 left-1/2 transform -translate-x-1/2 z-20"
    >
      <ul class="nav-menu bg-gray-300/50 rounded-2xl flex justify-around mb-4">
        <li>
          <nuxt-link to="/">
            <Icon name="mdi:home" class="text-white text-4xl" />
          </nuxt-link>
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
  </div>
</template>

<script setup></script>
