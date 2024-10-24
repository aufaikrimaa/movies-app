<template>
  <button
    :class="[
      'btn border-2 border-red-500 bg-red-500 flex justify-center text-center rounded-full py-1 lg:py-2 font-semibold shadow-[0_0_7px_8px_rgba(255,0,0,0.3)] transition-shadow duration-300 ease-linear hover:shadow-[0_0_7px_15px_rgba(255,0,0,0.3)]',
      widthClass,
    ]"
  >
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  width: {
    type: String,
  },
});

const widthClass = props.width;
</script>
