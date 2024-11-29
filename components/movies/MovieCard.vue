<template>
  <NuxtLink :to="link">
    <div
      class="movie-card relative bg-cover bg-no-repeat bg-top pt-[160%] rounded-3xl mb-2 transition-all duration-300 hover:shadow-lg"
      :style="{ backgroundImage: `url(${bg})` }"
    >
      <div
        class="btn absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-0 transition-transform duration-300 ease-in-out"
      >
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

<style>
.movie-card::before {
  content: "";
  @apply absolute inset-0 bg-black opacity-0 rounded-3xl transition-opacity duration-300 ease-in-out;
}

.movie-card:hover::before {
  @apply opacity-80;
}

.movie-card:hover .btn {
  @apply scale-100;
}
</style>
