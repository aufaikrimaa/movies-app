<template>
  <div>
    <div class="text-sm md:text-md lg:text-lg mb-3 lg:mb-6">
      {{ props.item.overview }}
    </div>
    <div class="flex w-full">
      <div class="w-1/3 grid gap-y-1">
        <div class="flex space-x-2">
          <span class="label">Director </span>: <span>{{}}</span>
        </div>
        <div class="flex space-x-2">
          <span class="label">Status</span>:
          <span>{{ props.item.status }}</span>
        </div>
        <div class="flex space-x-2">
          <span class="label">Released Date</span>:
          <span>{{ formattedDate }}</span>
        </div>

        <div class="flex space-x-2">
          <span class="label">Runtime</span>:
          <span>{{ props.runtime }}</span>
        </div>
        <div class="flex space-x-2">
          <span class="label">Language</span>:
          <span>{{ languageName }}</span>
        </div>
      </div>
      <div class="w-1/2 grid gap-y-1">
        <div class="flex space-x-2">
          <span class="label">Production</span>:
          <span>{{ props.item.production_companies[0].name }}</span>
        </div>

        <div class="flex space-x-2">
          <span class="label">Budget</span>:
          <span>{{ formatCurrency(props.item.budget) }}</span>
        </div>
        <div class="flex space-x-2">
          <span class="label">Revenue</span>:
          <span>{{ formatCurrency(props.item.revenue) }}</span>
        </div>
        <div class="flex space-x-2">
          <span class="label">Genres</span>:
          <div class="" v-for="(item, index) in props.item.genres" :key="index">
            <div
              class="bg-gray-300/20 py-1 px-2 w-fit rounded-full text-[0.5rem] lg:text-xs"
            >
              {{ item.name }}
            </div>
          </div>
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

const date = new Date(props.item.release_date);

const formattedDate = new Intl.DateTimeFormat("en-EN", {
  day: "numeric",
  month: "long",
  year: "numeric",
}).format(date);

const languageName = new Intl.DisplayNames(["en"], { type: "language" }).of(
  props.item.original_language
);

function formatCurrency(amount) {
  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);

  return formatted;
}
</script>

<style scoped>
.label {
  flex: 1;
  max-width: 90px;
  margin-right: 1.2rem;
  color: #fff;

  @media (min-width: 760px) {
    max-width: 110px;
  }
}
</style>
