<template>
  <div class="cursor-grab active:cursor-grabbing">
    <NuxtLoadingIndicator color="#ef4444" :duration="5000" :height="6" />
    <div v-if="loading" class="h-screen flex justify-center bg-[#0f0f0f] text-white">
      <div class="animate-bounce self-center"><Logo /></div>
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
            <div class="base text-white">
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
                <VideoModalVideo
                  :title="movie.title + ' - Video Trailer'"
                  :id="movie.id"
                  class="w-1/2 sm:w-fit"
                >
                  <Button width="w-full sm:w-48 lg:w-60">
                    <div class="flex items-stretch gap-2 self-center">
                      <Icon
                        name="uil:play"
                        style="color: white"
                        class="self-center text-md md:text-lg lg:text-xl"
                      />
                      <div class="self-start text-md md:text-lg lg:text-xl">Watch Trailer</div>
                    </div>
                  </Button>
                </VideoModalVideo>

                <NuxtLink :to="'/movie/' + movie.id" class="w-1/2 sm:w-fit">
                  <ButtonOutline
                    width="w-full sm:w-48 lg:w-60"
                    class="text-md md:text-lg lg:text-xl"
                    >More Info
                  </ButtonOutline></NuxtLink
                >
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
const loading = ref<boolean>(false);

const error = ref<string | null>(null);

const fetchMovies = async () => {
  loading.value = true;
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
};

fetchMovies();
</script>

<style scoped>
.popcorn {
  max-width: fit-content;
}
</style>
