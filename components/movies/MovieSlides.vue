<template>
  <div class="movie-list">
    <client-only>
      <Swiper :space-between="10" :slides-per-view="'auto'">
        <SwiperSlide v-for="(item, index) in items" :key="index">
          <MovieCard :item="item" :category="category" />
        </SwiperSlide>
      </Swiper>
    </client-only>
  </div>
</template>

<script setup>
import MovieCard from "./MovieCard.vue";

const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  category: String,
});
</script>

<style scoped>
.movie-list {
  @apply flex gap-4;
}

.swiper-slide {
  width: 15%;
}

@media (max-width: 768px) {
  .swiper-slide {
    width: 30%;
  }
}

@media (max-width: 640px) {
  .swiper-slide {
    width: 40%;
  }
}
</style>
