<template>
  <div>
    <div class="" @click="options.modelValue = true">
      <slot />
    </div>

    <VueFinalModal
      v-model="options.modelValue"
      :teleport-to="options.teleportTo"
      :hide-overlay="options.hideOverlay"
      :overlay-transition="options.overlayTransition"
      :content-transition="options.contentTransition"
      :click-to-close="options.clickToClose"
      :esc-to-close="options.escToClose"
      :lock-scroll="options.lockScroll"
      :reserve-scroll-bar-gap="options.reserveScrollBarGap"
      class="flex justify-center items-center"
      content-class="max-w-xl mx-4 p-4 bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-lg space-y-2"
    >
      <h1 class="text-xl">Hello World!</h1>
      <p>
        Magna deserunt nulla aliquip velit aute. Et occaecat elit nulla
        excepteur labore cupidatat. Duis culpa mollit commodo dolor qui Lorem
        qui laborum elit elit Lorem occaecat. Commodo eiusmod esse voluptate
        officia amet quis occaecat aliqua. Proident do irure amet ut occaecat
        dolor laboris consectetur.
      </p>
      <button @click="options.modelValue = false">Close</button>
    </VueFinalModal>

    <ModalsContainer />
  </div>
</template>

<script setup lang="ts">
import { ModalsContainer, VueFinalModal } from "vue-final-modal";

const getInitialValues = () => ({
  teleportTo: "body",
  modelValue: false,
  displayDirective: "if",
  hideOverlay: false,
  overlayTransition: "vfm-fade",
  contentTransition: " vfm-slide-up",
  clickToClose: true,
  escToClose: true,
  background: "non-interactive",
  lockScroll: true,
  reserveScrollBarGap: true,
});

const options = ref(getInitialValues());
</script>
