<template>
  <div class="base text-white">
    <h1 class="sm:text-lg md:text-xl lg:text-2xl font-semibold my-6">
      Backdrops
      <span
        class="ml-1 text-xs sm:text-sm md:text-base lg:text-lg text-white/60"
        >{{ backdrops.length }} images</span
      >
    </h1>
    <div
      class="grid gap-2 gap-y-2 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
    >
      <div v-for="(img, index) in backdrops" :key="index">
        <img :src="apiConfig.oriImg(img.file_path)" />
      </div>
    </div>

    <h1 class="sm:text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-6">
      Poster
      <span
        class="ml-1 text-xs sm:text-sm md:text-base lg:text-lg text-white/60"
        >{{ posters.length }} images</span
      >
    </h1>
    <div
      class="grid gap-2 gap-y-2 grid-cols-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8"
    >
      <div v-for="(img, index) in posters" :key="index">
        <img :src="apiConfig.oriImg(img.file_path)" />
      </div>
    </div>
  </div>
</template>

<script setup>
import tmdbApi, { apiConfig } from "@/services/tmdbApi";

const props = defineProps({
  category: String,
  id: String,
  orilang: String,
});

const backdrops = ref([]);
const posters = ref([]);
const loading = ref(true);
const error = ref(null);

const fetchImages = async () => {
  loading.value = true;
  error.value = null;

  try {
    const response = await tmdbApi.getImages(props.category, props.id);
    if (response) {
      backdrops.value = response.backdrops.filter(
        (bd) => bd.iso_639_1 === "en" || bd.iso_639_1 === props.orilang
      );
      posters.value = response.posters.filter(
        (po) => po.iso_639_1 === "en" || po.iso_639_1 === props.orilang
      );
    }
  } catch (err) {
    error.value = "Failed to load movie images. Please try again.";
    console.error("Error fetching movie images:", err);
  } finally {
    loading.value = false;
  }
};

fetchImages();
</script>
