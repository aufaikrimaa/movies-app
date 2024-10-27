<template>
  <div class="text-xs 2xl:text-base">
    <div class="mb-3 lg:mb-6">
      {{ props.item.overview }}
    </div>
    <div class="grid gap-y-2 md:gap-y-1 md:flex w-full">
      <div class="md:w-5/12 lg:w-1/2 grid gap-y-2 md:gap-y-1">
        <div class="flex space-x-2">
          <span class="label">Director </span>: <span>{{ directorName }}</span>
        </div>
        <div class="flex space-x-2">
          <span class="label">Status</span>:
          <span>{{ props.item.status }}</span>
        </div>
        <div v-if="category === 'movie'" class="flex space-x-2">
          <span class="label">Released Date</span>:
          <span>{{ formattedDate(props.item.release_date) }}</span>
        </div>

        <div v-if="category === 'tv'" class="flex space-x-2">
          <span class="label">Last Air Date</span>:
          <span>{{ formattedDate(props.item.last_air_date) }}</span>
        </div>

        <div v-if="category === 'movie'" class="flex space-x-2">
          <span class="label">Runtime</span>:
          <span>{{ props.runtime }}</span>
        </div>
        <div class="flex space-x-2">
          <span class="label">Language</span>:
          <span>{{ languageName }}</span>
        </div>
      </div>
      <div class="lg:w-7/12 grid gap-y-2 md:gap-y-1">
        <div class="flex space-x-2">
          <span class="label">Production</span>:
          <span>{{
            category === "movie"
              ? props.item.production_companies[0].name
              : props.item.production_companies
                  .slice(0, 3)
                  .map((company) => company.name)
                  .join(", ")
          }}</span>
        </div>

        <div v-if="category === 'movie'" class="flex space-x-2">
          <span class="label">Budget</span>:
          <span>{{ formatCurrency(props.item.budget) }}</span>
        </div>
        <div v-if="category === 'movie'" class="flex space-x-2">
          <span class="label">Revenue</span>:
          <span>{{ formatCurrency(props.item.revenue) }}</span>
        </div>

        <div v-if="category === 'tv'" class="flex space-x-2">
          <span class="label">Total Episode</span>:
          <span>{{ props.item.number_of_episodes }} episodes</span>
        </div>
        <div v-if="category === 'tv'" class="flex space-x-2">
          <span class="label">Total Season</span>:
          <span>{{ props.item.number_of_seasons }} season</span>
        </div>

        <div class="flex space-x-2">
          <span class="label">Genre</span>:
          <div class="flex flex-wrap gap-2">
            <div
              class="bg-gray-300/20 py-0.5 px-2 w-fit rounded-full text-[0.6rem] 2xl:text-sm"
              v-for="(item, index) in props.item.genres"
              :key="index"
            >
              <div class="">
                {{ item.name }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import tmdbApi from "@/services/tmdbApi";

const props = defineProps({
  item: {},
  runtime: String,
  category: String,
});

const languageName = new Intl.DisplayNames(["en"], { type: "language" }).of(
  props.item.original_language
);

function formattedDate(dateTime) {
  const date = new Date(dateTime);

  const formattedDate = new Intl.DateTimeFormat("en-EN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);

  return formattedDate;
}

function formatCurrency(amount) {
  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);

  return formatted;
}

const cast = ref([]);
const crew = ref([]);
const directorName = ref("");
const loading = ref(true);
const error = ref(null);

const fetchCredits = async () => {
  try {
    const response = await tmdbApi.credits(props.category, props.item.id);

    if ((response && response.cast) || (response && response.crew)) {
      cast.value = response.cast;
      crew.value = response.crew;
      const directors = crew.value.filter(
        (person) => person.job === "Director" || "Series Director"
      );
      if (directors.length > 0) {
        directorName.value = directors[0].name; // Set nama director pertama
      } else {
        directorName.value = "Director not found";
      }
    } else {
      error.value = "No credits found.";
    }
  } catch (err) {
    error.value = "Error fetching credits.";
    console.error("Error fetching credits:", err);
  } finally {
    loading.value = false;
  }
};

fetchCredits();

// console.log(cast);
// console.log(crew);
// console.log(props.item.last_air_date);
</script>

<style scoped>
.label {
  flex: 1;
  max-width: 90px;
  margin-right: 1.2rem;
  color: #fff;

  @media (min-width: 769px) {
    max-width: 76px;
  }

  @media (min-width: 1166px) {
    max-width: 100px;
  }
}
</style>
