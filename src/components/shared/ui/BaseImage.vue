<template>
  <figure class="flex-shrink-0 img-rounded" :class="imageClass">
    <img :src="src" :alt="alt" />
  </figure>
</template>

<script setup>
// Vue
import { computed } from "vue";

// Props
const props = defineProps({
  src: {
    type: String,
  },
  alt: {
    type: String,
  },
  small: {
    type: Boolean,
  },
  preview: {
    type: Boolean,
  },
});

// Bildeklasse
const imageClass = computed(() => {
  if (props.small) return { "img-rounded--small": true };
  if (props.preview) return { "img-rounded--preview": true };
  else return { "img-rounded--large": true };
});
</script>
