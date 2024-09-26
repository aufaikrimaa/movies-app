<template>
  <div v-if="!movies">Loading...</div>
  <div v-else>
    <div v-for="movie in movies" :key="movie.id">
      <div>{{ movie.title }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import tmdbApi from "@/services/tmdbApi";

const movies = ref<any>(null);

const fetchMovies = async () => {
  const data = await tmdbApi.getMoviesList("popular");
  movies.value = data.results;
  // console.log(data.results);
};

fetchMovies();
</script>
