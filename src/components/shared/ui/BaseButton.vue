<template>
  <button class="btn py-3 px-5 fw-bold h6" :class="btnClass">
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
});

const btnClass = computed(() => {
  return {
    "btn--cta": props.cta,
    "btn--warning": props.warning,
  };
});
</script>
