<template>
  <div class="bg-[#0f0f0f] w-screen">
    <Navbar />
    <div class="flex lg:justify-end pt-28 pb-8">
      <div class="container flex space-x-1 sm:space-x-4">
        <ButtonOutline
          width="w-24 sm:w-32 md:w-40"
          @click="changeType('popular')"
          class="text-[0.6rem] sm:text-xs md:text-md lg:text-base"
          :class="{
            'bg-[#F8EDE3] text-red-500': cate === 'popular',
          }"
          >Popular</ButtonOutline
        >
        <ButtonOutline
          width="w-24 sm:w-32 md:w-40"
          @click="changeType('top_rated')"
          class="text-[0.6rem] sm:text-xs md:text-md lg:text-base"
          :class="{ 'bg-[#F8EDE3] text-red-500': cate === 'top_rated' }"
          >Top Rated</ButtonOutline
        >
        <ButtonOutline
          width="w-24 sm:w-32 md:w-40"
          @click="changeType('now_playing')"
          class="text-[0.6rem] sm:text-xs md:text-md lg:text-base"
          :class="{ 'bg-[#F8EDE3] text-red-500': cate === 'now_playing' }"
          >Now Playing</ButtonOutline
        >
      </div>
    </div>

    <MoviesMovieGrid category="movie" :type="cate" title="" />
  </div>
</template>

<script setup>
const cate = ref("popular");
const router = useRouter();

const changeType = (type) => {
  cate.value = type;
};
</script>
