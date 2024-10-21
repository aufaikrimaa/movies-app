<template>
  <div class="h-[16rem]">
    <div class="flex h-full">
      <div class="w-1/2 bg-[#0f0f0f]"></div>
      <div
        class="w-1/2 bg-no-repeat bg-cover bg-center"
        :style="`background-image: linear-gradient(to right, #0f0f0f, rgba(0, 0, 0, 0)), url(${apiConfig.oriImg(
          movies?.backdrop_path || ''
        )})`"
      ></div>
      <div class="absolute text-white container grid gap-y-4 py-8">
        <div class="mb-4">
          <Logo />
        </div>
        <div class="flex gap-2 text-[0.6rem] lg:text-sm">
          Made with
          <img src="/nuxt.svg" class="w-12 lg:w-16 h-auto color-white" />
        </div>
        <div class="flex gap-2 text-[0.6rem] lg:text-sm">
          Data provided by<img src="/tmdb.svg" class="w-16 lg:w-20 h-auto" />
        </div>
        <div class="flex gap-2 text-[0.6rem] lg:text-sm">
          Developer : Aufa Ikrimah
          <Icon name="mdi:github" class="text-white text-base lg:text-xl" />
          <Icon name="mdi:linkedin" class="text-white text-base lg:text-xl" />
          <Icon
            name="mdi:semantic-web"
            class="text-white text-base lg:text-xl"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { apiConfig } from "@/services/tmdbApi";
import tmdbApi from "@/services/tmdbApi";

interface Movie {
  id: number;
  backdrop_path: string;
}

interface TMDBResponse {
  results: Movie[];
}

const movies = ref<Movie | null>(null);

const fetchOneMovie = async () => {
  const response = (await tmdbApi.getMoviesList("popular")) as TMDBResponse;
  if (response && response.results) {
    movies.value = response.results[0];
  }
};

fetchOneMovie();
</script>
