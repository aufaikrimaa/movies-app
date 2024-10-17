<template>
  <div class="container">
    <div class="flex justify-between">
      <div>1</div>
      <div>2</div>
    </div>
    <client-only>
      <Swiper :space-between="10" :slides-per-view="'auto'">
        <SwiperSlide v-for="(item, index) in movies" :key="index">
          <MovieCard :item="item" :category="category" />
        </SwiperSlide>
      </Swiper>
    </client-only>
  </div>
</template>

<script setup>
import MovieCard from "./MovieCard.vue";

const props = defineProps({
  category: String,
});

import { apiConfig } from "@/services/tmdbApi";
import tmdbApi from "@/services/tmdbApi";

const movies = ref([]);
const loading = ref(true);
const error = ref(null);

const fetchMovies = async () => {
  try {
    const response = await tmdbApi.getMoviesList("popular");
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

<style scoped>
.swiper-slide {
  width: 15%;
}
@media (max-width: 768px) {
  .swiper-slide {
    width: 20%;
  }
}
@media (max-width: 640px) {
  .swiper-slide {
    width: 30%;
  }
}
</style>
