<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
    <ModalsContainer />
  </div>
</template>

<script setup lang="ts">
import { ModalsContainer } from "vue-final-modal";
</script>

<style>
body {
  overflow-x: hidden;
}

@media (min-width: 300px) {
  .base {
    margin: 0 8px;
  }
}
@media (min-width: 640px) {
  .base {
    margin: 0 20px;
  }
}

@media (min-width: 768px) {
  .base {
    margin: 0 28px;
  }
}

@media (min-width: 1024px) {
  .base {
    margin: 0 36px;
  }
}
@media (min-width: 1280px) {
  .base {
    margin: 0 40px;
  }
}
</style>
