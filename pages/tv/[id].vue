<template>
  <div>
    Detail tv
    <div>ID: {{ tvId }}</div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

// Mengambil parameter dari route
const route = useRoute();
const tvId = route.params.id;
</script>
