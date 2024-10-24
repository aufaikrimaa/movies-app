<template>
  <div class="bg-[#0f0f0f]">
    <Navbar />
    <div class="flex lg:justify-end pt-16 sm:pt-20 md:pt-24 lg:pt-28 pb-8">
      <div class="base flex space-x-1 sm:space-x-4">
        <ButtonOutline
          width="w-24 sm:w-32 md:w-40"
          @click="changeType('popular')"
          class="text-[0.6rem] sm:text-xs md:text-md lg:text-base"
          :class="{
            'bg-[#f8ede3] text-red-500': cate === 'popular',
          }"
          >Popular</ButtonOutline
        >
        <ButtonOutline
          width="w-24 sm:w-32 md:w-40"
          @click="changeType('top_rated')"
          class="text-[0.6rem] sm:text-xs md:text-md lg:text-base"
          :class="{ 'bg-[#f8ede3] text-red-500': cate === 'top_rated' }"
          >Top Rated</ButtonOutline
        >
        <ButtonOutline
          width="w-24 sm:w-32 md:w-40"
          @click="changeType('now_playing')"
          class="text-[0.6rem] sm:text-xs md:text-md lg:text-base"
          :class="{ 'bg-[#f8ede3] text-red-500': cate === 'now_playing' }"
          >Now Playing</ButtonOutline
        >
        <ButtonOutline
          width="w-24 sm:w-32 md:w-40"
          @click="changeType('upcoming')"
          class="text-[0.6rem] sm:text-xs md:text-md lg:text-base"
          :class="{ 'bg-[#f8ede3] text-red-500': cate === 'upcoming' }"
          >Upcoming</ButtonOutline
        >
      </div>
    </div>

    <MoviesMovieGrid category="movie" :type="cate" title="" />
  </div>
</template>

<script setup>
const cate = ref("popular");
const route = useRoute();
const router = useRouter();

const changeType = (type) => {
  cate.value = type;
  router.push({ query: { type } });
};

onMounted(() => {
  if (route.query.type) {
    cate.value = route.query.type;
  }
});
</script>
