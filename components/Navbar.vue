<template>
  <div>
    <nav class="hidden lg:block absolute container z-20 top-9">
      <div class="text-white text-2xl flex gap-6 font-bold">
        <div>
          <nuxt-link to="/">Home</nuxt-link>
        </div>
        <div>
          <nuxt-link to="/">Movies</nuxt-link>
        </div>
        <div>
          <nuxt-link to="/">TV Shows</nuxt-link>
        </div>
      </div>
    </nav>
    <nav
      class="block lg:hidden w-4/5 fixed bottom-0 left-1/2 transform -translate-x-1/2 z-20"
    >
      <div
        class="nav-menu bg-gray-300/50 rounded-2xl flex justify-around mb-4 h-8 sm:h-10 md:h-12"
      >
        <div class="flex items-center">
          <nuxt-link to="/" class="flex items-center justify-center">
            <Icon
              name="mdi:home"
              class="text-white text-2xl sm:text-3xl md:text-4xl"
            />
          </nuxt-link>
        </div>
        <div class="flex items-center">
          <nuxt-link to="/" class="flex items-center justify-center">
            <Icon
              name="mdi:movie-play"
              class="text-white text-2xl sm:text-3xl md:text-4xl"
            />
          </nuxt-link>
        </div>
        <div class="flex items-center">
          <nuxt-link to="/" class="flex items-center justify-center">
            <Icon
              name="mdi:tv-classic"
              class="text-white text-2xl sm:text-3xl md:text-4xl"
            />
          </nuxt-link>
        </div>
        <div class="flex items-center">
          <nuxt-link to="/" class="flex items-center justify-center">
            <Icon
              name="mdi:search"
              class="text-white text-2xl sm:text-3xl md:text-4xl"
            />
          </nuxt-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup></script>
