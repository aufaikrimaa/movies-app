<template>
  <div class="base text-white">
    <h1 class="ml-1 text-xs sm:text-sm md:text-base lg:text-lg text-white/60">
      {{ videos.length }} videos
    </h1>
    <div class="grid gap-2 sm:gap-3 grid-cols-1 md:grid-cols-2 gap-y-4">
      <div v-for="(vid, index) in videos" :key="index">
        <iframe
          :src="'https://www.youtube.com/embed/' + vid.key"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          class="w-full h-[16rem] sm:h-[20rem] md:h-[16rem] 2xl:h-[20rem]"
          allowfullscreen
        ></iframe>
        <div class="flex justify-between">
          <h1 class="text-sm sm:text-base md:text-lg lg:text-xl">
            {{ vid.name }}
          </h1>
          <h1
            class="text-xs sm:text-sm md:text-base lg:text-lg text-white/60 flex self-center"
          >
            {{ vid.type }}
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import tmdbApi from "@/services/tmdbApi";

const props = defineProps({
  category: String,
  id: String,
});

const videos = ref([]);
const loading = ref(true);
const error = ref(null);

const fetchVideos = async () => {
  loading.value = true;
  error.value = null;

  try {
    const response = await tmdbApi.getVideos(props.category, props.id);
    if (response && response.results) {
      videos.value = response.results;
    }
  } catch (err) {
    error.value = "Failed to load movie Videos. Please try again.";
    console.error("Error fetching movie Videos:", err);
  } finally {
    loading.value = false;
  }
};

fetchVideos();
</script>
