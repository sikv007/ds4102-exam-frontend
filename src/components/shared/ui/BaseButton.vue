<template>
  <button class="btn py-2 px-4 fw-bold" :class="btnClass">
    {{ title }} &rarr;
  </button>
</template>

<script setup>
import { computed } from "vue";

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  cta: {
    type: Boolean,
  },
  warning: {
    type: Boolean,
  },
  outline: {
    type: Boolean,
  },
  small: {
    type: Boolean,
  },
  title: {
    type: String,
  },
});

const btnClass = computed(() => {
  return {
    "btn--cta": props.cta,
    "btn--warning": props.warning,
    "btn--outline": props.outline,
    "btn--small": props.small,
  };
});
</script>
