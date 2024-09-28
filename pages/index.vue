<template>
  <div v-if="!movies">Loading...</div>
  <div v-else>
    <div v-for="movie in movies" :key="movie.id">
      <div>{{ movie.title }}</div>
    </div>

    <!-- <div>{{ movies.biography }}</div> -->
  </div>
</template>

<script setup lang="ts">
import tmdbApi from "@/services/tmdbApi";

const movies = ref<any>(null);

const fetchMovies = async () => {
  const data = await tmdbApi.getMoviesList("popular");
  movies.value = data.results;
  // const data = await tmdbApi.person(137905)
  // movies.value = data;
  // const data = await tmdbApi.person(137905, "movie_credits");
  // console.log(data.cast);
};

fetchMovies();
</script>
