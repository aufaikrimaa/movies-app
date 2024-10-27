<template>
  <div class="flex items-center w-36 sm:mr-2">
    <div class="select-none">
      <div class="absolute"><img :src="starsEmpty" class="h-5" /></div>

      <div
        class="bg-no-repeat text-xs h-5 bg-cover"
        :style="`background-image: url(${starsFilled})`"
      >
        <div class="text-transparent">{{ dot }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import starsEmpty from "~/assets/images/stars.svg";
import starsFilled from "~/assets/images/filled-stars.svg";

const props = defineProps({
  vote_average: Number,
});

// State untuk menyimpan titik
const dot = ref(".");

// Watch untuk menghitung ulang titik ketika vote_average berubah
watch(
  () => props.vote_average,
  (newVoteAverage) => {
    const count = (newVoteAverage / 10) * 53;
    const totalDot = Math.round(count);
    dot.value = ".".repeat(totalDot);
  }
);

// Inisialisasi titik saat pertama kali
const initialCount = (props.vote_average / 10) * 48;
dot.value = ".".repeat(Math.round(initialCount));
</script>
