<template>
  <div class="bg-[#0f0f0f]">
    <Navbar />
    <div class="flex justify-end pt-28 pb-8">
      <div class="container flex gap-6">
        <ButtonOutline
          width="w-40"
          @click="changeType('popular')"
          :class="{
            'bg-[#F8EDE3] text-red-500': cate === 'popular',
          }"
          >Popular</ButtonOutline
        >
        <ButtonOutline
          width="w-40"
          @click="changeType('top_rated')"
          :class="{ 'bg-[#F8EDE3] text-red-500': cate === 'top_rated' }"
          >Top Rated</ButtonOutline
        >
        <ButtonOutline
          width="w-40"
          @click="changeType('airing_today')"
          :class="{ 'bg-[#F8EDE3] text-red-500': cate === 'airing_today' }"
          >Airing Today</ButtonOutline
        >
        <ButtonOutline
          width="w-40"
          @click="changeType('on_the_air')"
          :class="{ 'bg-[#F8EDE3] text-red-500': cate === 'on_the_air' }"
          >On The Air</ButtonOutline
        >
      </div>
    </div>

    <MoviesMovieGrid category="tv" :type="cate" title="" />
  </div>
</template>

<script setup>
const cate = ref("popular");
const router = useRouter();

const changeType = (type) => {
  cate.value = type;
};
</script>
