<template>
  <div class="base">
    <div
      class="grid gap-2 sm:gap-3 grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-y-6 sm:gap-y-8"
    >
      <div v-for="(item, index) in movies" :key="index">
        <MovieCard :item="item" :category="category" />
      </div>
    </div>

    <div class="flex justify-center mt-8">
      <ButtonOutline
        v-if="!loading && !isLastPage"
        @click="loadMoreMovies"
        width="w-20 sm:w-28 md:w-36"
      >
        <div class="flex justify-center gap-1">
          <span class="text-sm">Load More</span>
          <Icon name="uil:arrow-down" class="self-center text-lg" />
        </div>
      </ButtonOutline>
    </div>

    <!-- Loading Indicator -->
    <div v-if="loading" class="text-center my-4">Loading...</div>

    <!-- Error Message -->
    <div v-if="error" class="text-center text-red-500">{{ error }}</div>
  </div>
</template>

<script setup>
import MovieCard from "./MovieCard.vue";
import tmdbApi from "@/services/tmdbApi";

const props = defineProps({
  category: String,
  type: String,
});

const movies = ref([]);
const loading = ref(false);
const error = ref(null);
const page = ref(1);
const totalPages = ref(1);
const isLastPage = computed(() => page.value >= totalPages.value);

const fetchMovies = async (loadMore = false) => {
  loading.value = true;
  try {
    let response;
    if (props.category === "movie") {
      response = await tmdbApi.getMoviesList(props.type, { page: page.value });
    } else if (props.category === "tv") {
      response = await tmdbApi.getTvList(props.type, { page: page.value });
    }

    if (response && response.results) {
      if (loadMore) {
        movies.value = [...movies.value, ...response.results];
      } else {
        movies.value = response.results;
      }
      totalPages.value = response.total_pages;
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

// Load more movies (increment page and fetch)
const loadMoreMovies = () => {
  if (page.value < totalPages.value) {
    page.value += 1;
    fetchMovies(true); // Load more, keep previous movies
  }
};

// Fetch movies when type changes or on initial load
watch(
  () => props.type,
  () => {
    page.value = 1; // Reset to first page on type change
    fetchMovies();
  },
  { immediate: true }
);
</script>
