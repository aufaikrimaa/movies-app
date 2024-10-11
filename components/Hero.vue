<template>
  <div class="">
    <!-- <div class="container">Hero</div> -->
    <Swiper
      :modules="[SwiperAutoplay, SwiperEffectCreative]"
      :slides-per-view="1"
      :loop="true"
      :speed="1000"
      :effect="'creative'"
      :autoplay="{
        delay: 4000,
        disableOnInteraction: false,
      }"
      :creative-effect="{
        prev: {
          shadow: false,
          translate: ['-20%', 0, -1],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }"
    >
      <SwiperSlide v-for="movie in movies" :key="movie.id">
        <div
          class="h-4/5 lg:h-screen bg-no-repeat bg-cover bg-center grid content-end py-20"
          :style="`background-image: linear-gradient(to top, #0f0f0f, rgba(0, 0, 0, 0)), url(${apiConfig.oriImg(
            movie.backdrop_path
          )})`"
        >
          <div class="container text-white">
            <div
              class="bg-gray-300/20 py-2 px-3 w-fit rounded-full text-xs mb-6"
            >
              Trending Movie
            </div>
            <div class="w-11/12 md:w-4/5 lg:w-2/3">
              <h1 class="text-3xl lg:text-6xl font-bold mb-6">
                {{ movie.title }}
              </h1>
              <h3 class="text-xs lg:text-base">{{ movie.overview }}</h3>
            </div>
            <div class="flex gap-4 mt-6">
              <Button width="w-2/5" class="flex gap-2">
                <Icon
                  name="uil:play"
                  style="color: white"
                  class="self-center"
                />
                <span class="self-center">Watch Trailer</span>
              </Button>
              <ButtonOutline width="w-2/5">More Info </ButtonOutline>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>

    <!-- <div v-for="movie in movies" :key="movie.id">
      <div class="text-2xl text-purple-500">{{ movie.title }}</div>
    </div> -->

    <!-- <div>{{ movies.biography }}</div> -->
  </div>
</template>

<script setup lang="ts">
import { apiConfig } from "@/services/tmdbApi";
import tmdbApi from "@/services/tmdbApi";

// Definisikan tipe data untuk respons API
interface Movie {
  id: number;
  title: string;
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
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
      movies.value = response.results.slice(0, 6);
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
