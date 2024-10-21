<template>
  <div class="cursor-grab active:cursor-grabbing">
    <div
      class="container absolute flex justify-end right-0 lg:justify-center z-20 text-white text-md sm:text-xl lg:text-3xl lg:left-1/2 lg:right-1/2 top-2 sm:top-4 md:top-8 font-bold gap-1 md:gap-2"
    >
      <img src="/popcorn.svg" class="popcorn w-4 sm:w-6 lg:w-10 h-auto" />
      awaMovies
    </div>
    <div
      class="container absolute flex justify-end z-20 text-white hidden lg:block text-3xl right-0 top-7 gap-2"
    >
      <input
        type="text"
        placeholder="Type something..."
        class="bg-transparent h-8 self-center px-3 py-1 text-xs rounded-full w-9/10 w-[20rem] border border-white focus:outline-none focus:ring focus:ring-red-500 focus:ring-opacity-50"
      />
      <Icon
        name="uil:search"
        style="color: white"
        class="absolute top-6 right-2 transform -translate-y-1/2 h-6 pointer-events-none"
      />
    </div>
    <client-only>
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
            class="h-[20rem] sm:h-[24rem] md:h-[32rem] xl:h-[40rem] 2xl:h-[48rem] bg-no-repeat bg-cover bg-center grid content-end py-4 lg:py-20"
            :style="`background-image: linear-gradient(to top, #0f0f0f, rgba(0, 0, 0, 0)), url(${apiConfig.oriImg(
              movie.backdrop_path
            )})`"
          >
            <div class="container text-white">
              <div
                class="bg-gray-300/20 py-1 px-2 lg:py-2 lg:px-3 w-fit rounded-full text-[0.5rem] lg:text-xs mb-4 lg:mb-6"
              >
                Trending Movie
              </div>
              <div class="w-11/12 md:w-4/5 lg:w-2/3 mb-5 lg:mb-7">
                <h1 class="text-3xl lg:text-6xl font-bold mb-3 lg:mb-6">
                  {{ movie.title }}
                </h1>
                <h3 class="text-xs lg:text-base">{{ movie.overview }}</h3>
              </div>
              <div class="flex gap-4">
                <Button width="w-1/2 sm:w-48 lg:w-60" class="flex gap-2">
                  <Icon
                    name="uil:play"
                    style="color: white"
                    class="self-center text-md md:text-lg lg:text-xl"
                  />
                  <span class="self-center text-md md:text-lg lg:text-xl"
                    >Watch Trailer</span
                  >
                </Button>
                <ButtonOutline
                  width="w-1/2 sm:w-48 lg:w-60"
                  class="text-md md:text-lg lg:text-xl"
                  >More Info
                </ButtonOutline>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </client-only>

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
  backdrop_path: string;
  original_language: string;
  original_title: string;
  overview: string;
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

<style scoped>
.popcorn {
  max-width: fit-content;
}
</style>
