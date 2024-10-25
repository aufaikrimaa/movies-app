<template>
  <div class="bg-[#0f0f0f]">
    <div class="base pt-16 sm:pt-20 md:pt-24 lg:pt-28 pb-8 text-white">
      Detail tv
      <div>ID: {{ tvId }}</div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

// Mengambil parameter dari route
const route = useRoute();
const tvId = route.params.id;
</script>
