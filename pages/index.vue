<template>
  <div v-if="!movies">Loading...</div>
  <div v-else>
    <div v-for="movie in movies" :key="movie.id">
      <div class="text-2xl text-purple-500">{{ movie.title }}</div>
    </div>

    <!-- <div>{{ movies.biography }}</div> -->
  </div>
</template>

<script setup lang="ts">
import tmdbApi from "@/services/tmdbApi";

const movies = ref<any>(null);

const fetchMovies = async () => {
  try {
    const response = await tmdbApi.getMoviesList("popular");
    if (response && response.results) {
      movies.value = response.results;
    } else {
      console.log("Loading...");
    }
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
  // const data = await tmdbApi.person(137905)
  // movies.value = data;
  // const data = await tmdbApi.person(137905, "movie_credits");
  // console.log(data.cast);
};

fetchMovies();
</script>
