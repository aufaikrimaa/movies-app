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
            'menu-active': cate === 'popular',
          }"
          >Popular</ButtonOutline
        >
        <ButtonOutline
          width="w-24 sm:w-32 md:w-40"
          @click="changeType('top_rated')"
          class="text-[0.6rem] sm:text-xs md:text-md lg:text-base"
          :class="{ 'menu-active': cate === 'top_rated' }"
          >Top Rated</ButtonOutline
        >
        <ButtonOutline
          width="w-24 sm:w-32 md:w-40"
          @click="changeType('airing_today')"
          class="text-[0.6rem] sm:text-xs md:text-md lg:text-base"
          :class="{ 'menu-active': cate === 'airing_today' }"
          >Airing Today</ButtonOutline
        >
        <ButtonOutline
          width="w-24 sm:w-32 md:w-40"
          @click="changeType('on_the_air')"
          class="text-[0.6rem] sm:text-xs md:text-md lg:text-base"
          :class="{ 'menu-active': cate === 'on_the_air' }"
          >On The Air</ButtonOutline
        >
      </div>
    </div>

    <MoviesMovieGrid category="tv" :type="cate" title="" />
    <AppFooter class="mt-8" />
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

<style scoped>
.menu-active {
  background-color: #f8ede3;
  color: #ef4444;
}
</style>
