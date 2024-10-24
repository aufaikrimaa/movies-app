<template>
  <div>
    <div @click="options.modelValue = true">
      <slot></slot>
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
      content-class="relative w-4/5 lg:w-3/5 sm:h-2/5 md:h-3/5 lg:h-4/5 mx-4 p-4 bg-[#0f0f0f] rounded-2xl space-y-2"
    >
      <button @click="closeModal" class="absolute top-4 right-4">
        <Icon
          name="mdi:window-close"
          class="self-center text-md md:text-lg lg:text-xl text-white hover:text-red-500"
        />
      </button>
      <h1 class="text-sm sm:text-base lg:text-xl font-semibold sm:pb-2 lg:pb-4">
        {{ props.title }}
      </h1>

      <div class="h-5/6">
        <div v-if="videoSrc && videoSrc !== 'No Trailer'" class="h-full">
          <iframe
            :src="videoSrc"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            class="w-full h-full"
            allowfullscreen
          ></iframe>
        </div>
        <div v-else>
          <p>{{ videoSrc }}</p>
        </div>
      </div>
    </VueFinalModal>

    <ModalsContainer />
  </div>
</template>

<script setup>
import { ref, defineProps, onMounted } from "vue";
import { ModalsContainer, VueFinalModal } from "vue-final-modal";
import tmdbApi, { category } from "@/services/tmdbApi";

const getInitialValues = () => ({
  teleportTo: "body",
  modelValue: false,
  hideOverlay: false,
  overlayTransition: "vfm-fade",
  contentTransition: "vfm-slide-up",
  clickToClose: true,
  escToClose: true,
  lockScroll: true,
  reserveScrollBarGap: true,
});

const options = ref(getInitialValues());

const videoSrc = ref("");
const props = defineProps({
  title: {
    type: String,
  },
  id: {
    type: Number,
  },
});

const fetchVideo = async () => {
  const videos = await tmdbApi.getVideos(category.movie, props.id);
  const teaserVideos = videos.results.filter(
    (video) => video.type === "Teaser"
  );
  if (teaserVideos.length > 0) {
    videoSrc.value = "https://www.youtube.com/embed/" + teaserVideos[0].key;
  } else {
    videoSrc.value = "No Trailer";
  }
};

onMounted(fetchVideo);

const closeModal = () => {
  options.value.modelValue = false;
};
</script>
