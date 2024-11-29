<template>
  <div class="bg-[#0f0f0f] pt-6 sm:pt-8 lg:pt-16">
    <div class="base">
      <div class="flex justify-between mb-4 lg:mb-6">
        <div
          class="text-white sm:text-lg md:text-xl lg:text-2xl font-semibold self-center rounded-full"
          :style="`background-image: linear-gradient(to right, #ef4444, rgba(0, 0, 0, 0))`"
        >
          {{ title }}
        </div>
        <nuxt-link :to="`/${category}?type=${type}`">
          <ButtonOutline width="w-8 sm:w-32 lg:w-42" class="flex justify-center">
            <span class="hidden sm:block self-center sm:text-xs md:text-sm lg:text-md"
              >explore more</span
            >
            <Icon
              name="uil:arrow-right"
              class="self-center text-sm sm:text-lg lg:text-xl" /></ButtonOutline
        ></nuxt-link>
      </div>

      <div v-if="loading" class="h-full flex justify-center bg-[#0f0f0f] text-white">
        <div class="animate-bounce self-center"><Logo /></div>
      </div>
      <client-only>
        <Swiper :space-between="10" :slides-per-view="'auto'">
          <SwiperSlide v-for="(item, index) in movies" :key="index">
            <MovieCard :item="item" :category="category" />
          </SwiperSlide>
        </Swiper>
      </client-only>
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

const route = useRoute();

const movies = ref([]);
const loading = ref(true);
const error = ref(null);

const fetchMovies = async () => {
  try {
    let response;
    if (route.params.id) {
      response = await tmdbApi.similar(props.category, route.params.id);
    } else if (props.category === "movie" && !route.params.id) {
      response = await tmdbApi.getMoviesList(props.type);
    } else if (props.category === "tv" && !route.params.id) {
      response = await tmdbApi.getTvList(props.type);
    }

    if (response && response.results) {
      if (route.params.id) {
        movies.value = response.results.filter((res) => res.poster_path !== null);
      } else {
        movies.value = response.results;
      }
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
