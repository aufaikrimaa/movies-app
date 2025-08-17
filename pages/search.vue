<template>
  <div class="bg-[#0f0f0f]">
    <div class="flex lg:justify-end pt-16 sm:pt-20 md:pt-24 lg:pt-28 pb-8">
      <div class="base flex space-x-1 sm:space-x-4">
        <ButtonOutline
          width="w-24 sm:w-32 md:w-40"
          @click="changeCategory('movie')"
          class="text-[0.6rem] sm:text-xs md:text-md lg:text-base"
          :class="{
            'menu-active': category === 'movie',
          }"
          >Movies</ButtonOutline
        >
        <ButtonOutline
          width="w-24 sm:w-32 md:w-40"
          @click="changeCategory('tv')"
          class="text-[0.6rem] sm:text-xs md:text-md lg:text-base"
          :class="{ 'menu-active': category === 'tv' }"
          >TV Series</ButtonOutline
        >
      </div>
    </div>

    <MoviesMovieGrid :category="category" :search-page="true" :query="searchQuery" />
    <div class="pt-8"></div>
  </div>
</template>

<script setup>
const route = useRoute();
const router = useRouter();

const searchQuery = ref(route.query.q || "");
const category = ref(route.query.c || "movie");

const changeCategory = (newCategory) => {
  category.value = newCategory;
  router.push({ query: { ...route.query, c: newCategory } });
};

watch(
  () => route.query,
  (newQuery) => {
    if (newQuery.q) {
      searchQuery.value = newQuery.q;
    }
    if (newQuery.c) {
      category.value = newQuery.c;
    }
  },
  { immediate: true }
);
</script>

<style scoped>
.menu-active {
  background-color: #f8ede3;
  color: #ef4444;
}
</style>
