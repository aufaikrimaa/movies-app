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

// Definisikan tipe data untuk respons API
interface Movie {
  id: number;
  title: string;
}

interface TMDBResponse {
  results: Movie[];
}

const movies = ref<Movie[]>([]);
const loading = ref<boolean>(true);
const error = ref<string | null>(null);

const fetchMovies = async () => {
  try {
    const response = (await tmdbApi.getMoviesList("popular")) as TMDBResponse;
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
