<template>
  <div class="w-1/2">
    <!-- <Swiper :space-between="10" :slides-per-view="'auto'">
      <SwiperSlide>
        <div v-for="(item, index) in props.cast" :key="index">
          <div v-if="item.profile_path">
            <img :src="apiConfig.oriImg(item.profile_path)" />
          </div></div></SwiperSlide
    ></Swiper> -->

    <!-- <div v-for="(item, index) in props.cast" :key="index">
      <div
        class="movie-card relative bg-cover bg-no-repeat bg-top pt-[160%] rounded-3xl mb-2 transition-all duration-300 hover:shadow-lg"
        :style="{ backgroundImage: `url(${profile(item.profile_path)})` }"
      ></div>
      <h3
        class="text-center mt-1 font-semibold text-[0.6rem] sm:text-xs md:text-sm lg:text-lg text-white"
      >
        {{ item.name }}
      </h3>
    </div> -->
    <!-- <NuxtLink :to="link"> -->
    <div class="my-6">Cast</div>
    <client-only>
      <Swiper :space-between="10" :slides-per-view="'auto'">
        <SwiperSlide v-for="(item, index) in castList" :key="index">
          <div>
            <img :src="apiConfig.oriImg(item.profile_path)" />
            <h3
              class="text-center mt-1 font-semibold text-[0.6rem] sm:text-xs md:text-sm lg:text-lg text-white"
            >
              {{ item.name }}
            </h3>
          </div>
        </SwiperSlide>
      </Swiper>
    </client-only>

    <!-- </NuxtLink> -->
  </div>
</template>

<script setup>
import { apiConfig } from "~/services/tmdbApi";

const props = defineProps({
  cast: Array,
});
//   const link = computed(() => `/${props.category}/${props.item.id}`);

const castList = props.cast.filter((cs) => cs.profile_path !== null);
</script>

<style scoped>
.swiper-slide {
  width: 8%;
}
/* @media (max-width: 768px) {
  .swiper-slide {
    width: 10%;
  }
}
@media (max-width: 640px) {
  .swiper-slide {
    width: 30%;
  }
} */
</style>
