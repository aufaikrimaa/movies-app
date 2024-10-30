<template>
  <div class="w-fit text-center">
    <!-- <nuxt-link
      class="credits-item__link"
      :to="{ name: 'person-id', params: { id: props.person.id } }"
    > -->

    <img
      :src="apiConfig.w500Img(props.person.profile_path)"
      class="h-[6.8rem] sm:h-[8rem] lg:h-[10rem] h-auto rounded-lg"
      alt="Cast Image"
    />

    <h2 class="text-[0.6rem] mt-1">
      {{ props.person.name }}
    </h2>

    <div class="text-[0.6rem] text-white/60">
      {{ props.person.character }}
    </div>
    <!-- </nuxt-link> -->
  </div>
</template>

<script setup>
import { apiConfig } from "@/services/tmdbApi";

const props = defineProps({
  person: Object,
});
</script>
