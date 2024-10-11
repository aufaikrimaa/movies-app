<template>
  <button
    :class="[
      'btn bg-red-500 lg:w-48 text-sm lg:text-base text-[#F8EDE3] flex justify-center rounded-full py-2 font-semibold shadow-[0_0_7px_8px_rgba(255,0,0,0.3)] transition-shadow duration-300 ease-linear hover:shadow-[0_0_7px_15px_rgba(255,0,0,0.3)]',
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
