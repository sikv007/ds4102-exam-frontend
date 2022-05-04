<template>
  <button class="btn" :class="{ ...btnClass }">{{ title }} &rarr;</button>
</template>

<script setup>
import { computed } from 'vue';

// Props
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
  text: {
    type: Boolean,
  },
  small: {
    type: Boolean,
  },
  title: {
    type: String,
  },
});

// Button klasser basert på props
const btnClass = computed(() => {
  return {
    'btn--cta py-2 px-4': props.cta,
    'btn--warning py-2 px-4': props.warning,
    'btn--outline py-2 px-4': props.outline,
    'btn--small py-2 px-4': props.small,
    'btn--text': props.text,
  };
});
</script>
