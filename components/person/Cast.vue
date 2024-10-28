<template>
  <div class="text-white">
    <div class="mt-4 mb-1 text-xl lg:text-2xl font-semibold">Cast</div>
    <div class="">
      <div v-if="cast.length > 0" class="">
        <client-only
          ><Swiper :slides-per-view="'auto'">
            <SwiperSlide v-for="(item, index) in cast" :key="index">
              <PersonItem :person="item"
            /></SwiperSlide> </Swiper
        ></client-only>
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
@media (max-width: 1716px) {
  .swiper-slide {
    width: 14%;
  }
}

@media (max-width: 1422px) {
  .swiper-slide {
    width: 13%;
  }
}
@media (max-width: 1408px) {
  .swiper-slide {
    width: 14%;
  }
}
@media (max-width: 1332px) {
  .swiper-slide {
    width: 15%;
  }
}
@media (max-width: 1279px) {
  .swiper-slide {
    width: 10%;
  }
}
@media (max-width: 1178px) {
  .swiper-slide {
    width: 11%;
  }
}
@media (max-width: 1080px) {
  .swiper-slide {
    width: 12%;
  }
}
@media (max-width: 1024px) {
  .swiper-slide {
    width: 10%;
  }
}
@media (max-width: 950px) {
  .swiper-slide {
    width: 11%;
  }
}
@media (max-width: 858px) {
  .swiper-slide {
    width: 12%;
  }
}
@media (max-width: 780px) {
  .swiper-slide {
    width: 13%;
  }
}
@media (max-width: 714px) {
  .swiper-slide {
    width: 15%;
  }
}
@media (max-width: 604px) {
  .swiper-slide {
    width: 16%;
  }
}
@media (max-width: 574px) {
  .swiper-slide {
    width: 18%;
  }
}
@media (max-width: 504px) {
  .swiper-slide {
    width: 20%;
  }
}
@media (max-width: 480px) {
  .swiper-slide {
    width: 20%;
  }
}
@media (max-width: 400px) {
  .swiper-slide {
    width: 23%;
  }
}
</style>
