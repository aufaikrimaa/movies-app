<template>
  <div class="bg-[#0f0f0f]">
    <div v-if="loading" class="text-white text-center py-20">Loading...</div>
    <div v-else-if="error" class="text-red-500 text-center py-20">
      {{ error }}
    </div>
    <div
      v-else
      class="relative bg-no-repeat bg-cover bg-center py-4 lg:pt-20 lg:pb-8"
      :style="`background-image: linear-gradient(to top, #0f0f0f 30%, rgba(0, 0, 0, 0.5) 90%), url(${apiConfig.oriImg(
        movie.backdrop_path
      )})`"
    >
      <div class="flex justify-center">
        <div
          class="base overview flex lg:w-4/5 xl:w-full 2xl:w-4/5 gap-6 2xl:gap-10 pt-12 sm:pt-16 md:pt-20 lg:pt-16 text-white"
        >
          <img
            v-if="movie.poster_path"
            :src="apiConfig.w500Img(movie.poster_path)"
            class="hidden md:block h-[23rem] lg:h-[27rem] xl:h-[34rem] rounded-3xl"
          />
          <div :style="{ width: '80%' }">
            <div class="text-3xl lg:text-4xl font-bold mb-3">
              <div v-if="category === 'movie'">{{ movie.title }}</div>
              <div v-if="category === 'tv'">{{ movie.name }}</div>
            </div>
            <!-- <div class="font-semibold text-xl ">
              <span class="font-bold text-red-500">|</span> {{ movie.tagline }}
            </div> -->
            <div class="flex mb-3">
              <MoviesMovieStars
                v-if="movie.vote_average"
                :vote_average="movie.vote_average"
              />

              <div class="text-white/50 text-base md:text-md lg:text-lg flex">
                <span v-if="movie.vote_average" class="hidden sm:block">{{
                  voteAvg(movie.vote_average)
                }}</span>
                <span v-if="movie.vote_average" class="mx-2 hidden sm:block"
                  >·</span
                >
                <span v-if="movie.vote_count" class="hidden sm:block"
                  >{{ formatReviews(movie.vote_count) }} Reviews</span
                >
                <span v-if="movie.release_date" class="mx-2">·</span>
                <span v-if="movie.release_date">{{ year }}</span>
                <span v-if="movie.runtime" class="mx-2">·</span>
                <span v-if="movie.runtime">{{ formattedRuntime }}</span>
              </div>
            </div>

            <MoviesMovieInfo
              :item="movie"
              :runtime="formattedRuntime"
              :category="props.category"
              :director-name="directorName"
            />
            <PersonCast :cast="cast" class="hidden xl:block" />
          </div>
        </div>
      </div>
    </div>
    <div class="base block pb-8 xl:hidden">
      <PersonCast :cast="cast" />
    </div>
    <div class="my-4 md:my-8 xl:my-12">
      <div class="base flex justify-center md:justify-end gap-4">
        <ButtonOutline
          @click="changeMenu('videos')"
          width="w-24 sm:w-32 md:w-40"
          class="text-[0.6rem] sm:text-xs md:text-md lg:text-base"
          :class="{
            'menu-active': menus === 'videos',
          }"
          >Videos</ButtonOutline
        >
        <ButtonOutline
          @click="changeMenu('images')"
          width="w-24 sm:w-32 md:w-40"
          class="text-[0.6rem] sm:text-xs md:text-md lg:text-base"
          :class="{
            'menu-active': menus === 'images',
          }"
          >Images</ButtonOutline
        >
      </div>

      <MediaMovieImages
        :category="props.category"
        :id="movieId"
        :orilang="movie.original_language"
        v-if="menus === 'images'"
      />
      <MediaMovieVideos
        :category="props.category"
        :id="movieId"
        v-if="menus === 'videos'"
      />
    </div>

    <MoviesMovieSlides
      :category="props.category"
      title="More like this"
      type="popular"
      class="pb-12"
    />
  </div>
</template>

<script setup>
import tmdbApi, { apiConfig } from "@/services/tmdbApi";
import { useRoute } from "vue-router";

const props = defineProps({
  category: String,
});

const route = useRoute();
const movieId = route.params.id;

const menus = ref("videos");

const changeMenu = (menu) => {
  menus.value = menu;
};

const movie = ref({});
const loading = ref(true);
const error = ref(null);

const cast = ref([]);
const crew = ref([]);
const directorName = ref("");

const year = ref("");
const formattedRuntime = ref("");

const formatReviews = (num) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  } else {
    return num;
  }
};
const voteAvg = (vote) => {
  return vote ? vote.toFixed(1) : "N/A";
};

const fetchDetail = async () => {
  loading.value = true;
  error.value = null;

  try {
    const response = await tmdbApi.detail(props.category, movieId);
    movie.value = response;

    if (movie.value.release_date) {
      year.value = movie.value.release_date.split("-")[0];
    }

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

const fetchCredits = async () => {
  try {
    const response = await tmdbApi.credits(props.category, movieId);

    if ((response && response.cast) || (response && response.crew)) {
      cast.value = response.cast
        .filter((cs) => cs.profile_path !== null)
        .slice(0, 20);
      crew.value = response.crew;
      const directors = crew.value.filter((person) =>
        person.job.includes("Director")
      );
      if (directors.length > 0) {
        directorName.value = directors[0].name;
      } else {
        directorName.value = "none";
      }
    } else {
      console.error("No credits found.");
    }
  } catch (err) {
    console.error("Error fetching credits:", err);
  }
};

fetchDetail();
fetchCredits();
</script>

<style scoped>
.menu-active {
  background-color: #f8ede3;
  color: #ef4444;
}
</style>
