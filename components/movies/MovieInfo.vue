<template>
  <div>
    <div class="text-sm md:text-md lg:text-lg mb-3 lg:mb-6">
      {{ props.item.overview }}
    </div>
    <div class="flex gap-12 w-full">
      <div class="w-1/4">
        <div class="flex space-x-4">
          <span class="label">Director </span>: <span>{{}}</span>
        </div>
        <div class="flex space-x-4">
          <span class="label">Status</span>:
          <span>{{ props.item.status }}</span>
        </div>
        <div class="flex space-x-4">
          <span class="label">Released Date</span>:
          <span>{{ props.item.release_date }}</span>
        </div>

        <div class="flex space-x-4">
          <span class="label">Runtime</span>:
          <span>{{ props.runtime }}</span>
        </div>
        <div class="flex space-x-4">
          <span class="label">Language</span>:
          <span>{{ props.item.original_language }}</span>
        </div>
      </div>
      <div class="w-2/3">
        <div class="flex space-x-4">
          <span class="label">Production</span>:
          <span>{{ props.item.production_companies[0].name }}</span>
        </div>

        <div class="flex space-x-4">
          <span class="label">Budget</span>:
          <span>{{ props.item.budget }}</span>
        </div>
        <div class="flex space-x-4">
          <span class="label">Revenue</span>:
          <span>{{ props.item.revenue }}</span>
        </div>
        <div class="flex space-x-4">
          <span class="label">Genres</span>:
          <div class="" v-for="(item, index) in props.item.genres" :key="index">
            <div
              class="bg-gray-300/20 py-1 px-2 w-fit rounded-full text-[0.5rem] lg:text-xs"
            >
              {{ item.name }}
            </div>
          </div>
        </div>
        <div class="flex space-x-4">
          <span class="label">Official site</span>:
          <span>{{ props.item.homepage }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  item: {},
  runtime: String,
});
</script>

<style scoped>
.label {
  flex: 1;
  max-width: 90px;
  margin-right: 1.5rem;
  color: #fff;

  @media (min-width: 760px) {
    max-width: 110px;
  }
}
</style>
