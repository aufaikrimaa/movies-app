<template>
  <div class="w-full">
    <div class="mt-4 mb-1 text-2xl font-semibold">Cast</div>
    <div
      class="w-full gap-x-1 text-xs xl:text-[0.7rem] 2xl:text-xs mt-8 sm:mt-0 justify-center sm:pr-4"
    >
      <div v-if="cast.length > 0" class="">
        <Swiper :slides-per-view="'auto'">
          <SwiperSlide v-for="(item, index) in cast" :key="index">
            <PersonItem :person="item"
          /></SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  cast: Array,
});
//   const link = computed(() => `/${props.category}/${props.item.id}`);
</script>

<style scoped>
.swiper-slide {
  width: 12%;
}
@media (max-width: 1586px) {
  .swiper-slide {
    width: 15%;
  }
}
@media (max-width: 768px) {
  .swiper-slide {
    width: 20%;
  }
}
@media (max-width: 640px) {
  .swiper-slide {
    width: 30%;
  }
}
</style>
