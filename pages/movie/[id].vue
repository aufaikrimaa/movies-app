<template>
  <div class="bg-[#0f0f0f]">
    <div v-if="loading" class="text-white text-center py-20">Loading...</div>
    <div v-else-if="error" class="text-red-500 text-center py-20">
      {{ error }}
    </div>
    <div
      v-else
      class="relative h-[90vh] bg-no-repeat bg-cover bg-center py-4 lg:py-20"
      :style="`background-image: linear-gradient(to top, #0f0f0f 30%, rgba(0, 0, 0, 0) 90%), url(${apiConfig.oriImg(
        movie.backdrop_path
      )})`"
    >
      <div
        class="base flex gap-10 pt-16 sm:pt-20 md:pt-24 lg:pt-28 pb-8 text-white"
      >
        <img
          v-if="movie.poster_path"
          :src="apiConfig.w500Img(movie.poster_path)"
          class="hidden md:block h-[36rem] rounded-3xl"
        />
        <div>
          <div class="text-3xl lg:text-6xl font-bold mb-3 lg:mb-6">
            {{ movie.title }}
          </div>
          <!-- <div class="font-semibold text-xl ">
            <span class="font-bold text-red-500">|</span> {{ movie.tagline }}
          </div> -->
          <div class="flex mb-3 lg:mb-6">
            <RatingStars
              v-if="movie.vote_average"
              :vote_average="movie.vote_average"
            />

            <div class="text-white/60 text-base md:text-md lg:text-lg flex">
              <span class="hidden sm:block">{{
                voteAvg(movie.vote_average)
              }}</span>
              <span class="mx-2 hidden sm:block">·</span>
              <span class="hidden sm:block"
                >{{ formatReviews(movie.vote_count) }} Reviews</span
              >
              <span class="mx-2">·</span>
              <span>{{ year }}</span>
              <span class="mx-2">·</span>
              <span>{{ formattedRuntime }}</span>
            </div>
          </div>

          <MoviesMovieInfo :item="movie" :runtime="formattedRuntime" />
        </div>
      </div>
    </div>
    <div class="base text-white">
      Detail Movie
      <div>ID: {{ movieId }}</div>
    </div>
  </div>
</template>

<script setup>
import tmdbApi, { apiConfig } from "@/services/tmdbApi";
import { useRoute } from "vue-router";

// Mengambil parameter id dari URL
const route = useRoute();
const movieId = route.params.id;

// State untuk menyimpan data movie, loading state, dan error
const movie = ref({});
const loading = ref(true);
const error = ref(null);

// Year dan formatted runtime juga disimpan di state
const year = ref("");
const formattedRuntime = ref("");

// Fungsi untuk format reviews
const formatReviews = (num) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  } else {
    return num;
  }
};

// Fungsi untuk format vote average
const voteAvg = (vote) => {
  return vote ? vote.toFixed(1) : "N/A";
};

// Fungsi untuk fetch detail movie
const fetchDetail = async () => {
  loading.value = true;
  error.value = null;

  try {
    const response = await tmdbApi.detail("movie", movieId);
    movie.value = response;

    // Menghitung year dari release_date
    if (movie.value.release_date) {
      year.value = movie.value.release_date.split("-")[0];
    }

    // Menghitung runtime dan memformatnya
    if (movie.value.runtime) {
      const hours = Math.floor(movie.value.runtime / 60);
      const minutes = movie.value.runtime % 60;
      formattedRuntime.value = `${hours}h ${minutes}min`;
    }
  } catch (err) {
    error.value = "Failed to load movie details. Please try again.";
    console.error("Error fetching movie details:", err);
  } finally {
    loading.value = false;
  }
};

// Memanggil fetchDetail ketika komponen dimount
fetchDetail();

console.log(movie);
</script>

<style scoped>
.text-stroke {
  -webkit-text-stroke: 0.4px #ef4444;
}
</style>
