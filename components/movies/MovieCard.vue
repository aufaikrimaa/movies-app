<template>
  <NuxtLink :to="link">
    <div
      class="movie-card relative bg-cover bg-no-repeat bg-top pt-[160%] rounded-3xl mb-2 transition-all duration-300 hover:shadow-lg"
      :style="{ backgroundImage: `url(${bg})` }"
    >
      <div class="play-button">
        <Button width="w-16">
          <Icon name="uil:play" style="color: white" class="h-6" />
        </Button>
      </div>
    </div>
    <h3
      class="text-center mt-1 font-semibold text-[0.6rem] sm:text-xs md:text-sm lg:text-lg text-white"
    >
      {{ item.title || item.name }}
    </h3>
  </NuxtLink>
</template>

<script setup>
import { computed } from "vue";
import { apiConfig } from "~/services/tmdbApi";

const props = defineProps({
  item: Object,
  category: String,
});
const link = computed(() => `/${props.category}/${props.item.id}`);

const bg = computed(() => apiConfig.w500Img(props.item.poster_path || props.item.backdrop_path));
</script>

<style scoped>
.movie-card {
  position: relative;
  overflow: hidden;
}

.movie-card::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: black;
  opacity: 0;
  border-radius: 1.5rem;
  transition: opacity 300ms ease-in-out;
}

.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  transition: transform 300ms ease-in-out;
  z-index: 1;
}

.movie-card:hover::before {
  opacity: 0.8;
}

.movie-card:hover .play-button {
  transform: translate(-50%, -50%) scale(1);
}
</style>
