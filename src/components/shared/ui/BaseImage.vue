<template>
  <figure class="flex-shrink-0 img-rounded" :class="imageClass">
    <img :src="src" :alt="alt" />
  </figure>
</template>

<script setup>
import { computed } from "@vue/runtime-core";

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
});

const imageClass = computed(() => {
  return props.small
    ? { "img-rounded--small": true }
    : { "img-rounded--large": true };
});
</script>
