<template>
  <div>
    <Navbar />
    <Hero />
    <MoviesMovieSlides :items="movies" category="movie" />
    <MoviesMovieSlides :items="movies" category="movie" />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { apiConfig } from "@/services/tmdbApi";
import tmdbApi from "@/services/tmdbApi";

const movies = ref<any[]>([]);
const loading = ref(true);
const error = ref<string | null>(null);

const fetchMovies = async () => {
  try {
    const response = (await tmdbApi.getMoviesList("popular")) as {
      results: any[];
    };
    if (response && response.results) {
      movies.value = response.results;
    } else {
      error.value = "No movies found.";
    }
  } catch (err) {
    error.value = "Error fetching movies.";
    console.error("Error fetching movies:", err);
  } finally {
    loading.value = false;
  }
  // const data = await tmdbApi.person(137905)
  // movies.value = data;
  // const data = await tmdbApi.person(137905, "movie_credits");
  // console.log(data.cast);
};

fetchMovies();
</script>
