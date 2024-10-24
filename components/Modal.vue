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
      class="modal flex justify-center items-center text-white"
      content-class="relative max-w-xl mx-4 p-4 bg-[#0f0f0f] rounded-lg space-y-2"
    >
      <button
        @click="options.modelValue = false"
        class="absolute top-4 right-4"
      >
        <Icon
          name="mdi:window-close"
          style="color: white"
          class="self-center text-md md:text-lg lg:text-xl"
        />
      </button>
      <h1 class="text-xl">Hello World!</h1>
      <p>
        Magna deserunt nulla aliquip velit aute. Et occaecat elit nulla
        excepteur labore cupidatat. Duis culpa mollit commodo dolor qui Lorem
        qui laborum elit elit Lorem occaecat. Commodo eiusmod esse voluptate
        officia amet quis occaecat aliqua. Proident do irure amet ut occaecat
        dolor laboris consectetur.
      </p>
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
  contentTransition: "vfm-slide-up",
  clickToClose: true,
  escToClose: true,
  background: "non-interactive",
  lockScroll: true,
  reserveScrollBarGap: true,
});

const options = ref(getInitialValues());
</script>
