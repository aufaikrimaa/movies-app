<template>
  <div class="container pt-28">
    <div class="text-white">{{ title }}</div>
    <div class="grid gap-4 grid-cols-7 grid-rows-3">
      <div v-for="(item, index) in movies" :key="index">
        <MovieCard :item="item" :category="category" />
      </div>
    </div>
  </div>
</template>

<script setup>
import MovieCard from "./MovieCard.vue";
import tmdbApi from "@/services/tmdbApi";

const props = defineProps({
  category: String,
  type: String,
  title: String,
});

const movies = ref([]);
const loading = ref(true);
const error = ref(null);

const fetchMovies = async () => {
  try {
    let response;
    if (props.category === "movie") {
      response = await tmdbApi.getMoviesList(props.type);
    } else if (props.category === "tv") {
      response = await tmdbApi.getTvList(props.type);
    }

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
};

fetchMovies();
</script>
