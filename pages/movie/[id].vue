<template>
  <div>
    Detail Movie
    <div>ID: {{ movieId }}</div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

// Mengambil parameter dari route
const route = useRoute();
const movieId = route.params.id;
</script>
