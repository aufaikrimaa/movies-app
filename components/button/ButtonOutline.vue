<template>
  <button
    :class="[
      'btn-outline w-96 border-2 border-white/60 bg-transparent text-[#F8EDE3] rounded-full text-center py-2 font-semibold transition-colors duration-300 ease-linear hover:bg-[#F8EDE3] hover:text-red-500',
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
