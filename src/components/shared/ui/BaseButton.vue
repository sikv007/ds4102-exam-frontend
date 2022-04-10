<template>
  <button class="btn py-2 px-4 fw-bold" :class="btnClass">
    <slot></slot>
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
    type: Boolean
  }
});

const btnClass = computed(() => {
  return {
    "btn--cta": props.cta,
    "btn--warning": props.warning,
    "btn--outline": props.outline,
  };
});
</script>
