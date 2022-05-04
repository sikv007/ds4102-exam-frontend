<template>
  <div class="col-12 single" :class="singleClass">
    <div class="container p-5">
      <div class="row">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  small: {
    type: Boolean,
  },
  large: {
    type: Boolean,
  },
});

const singleClass = computed(() => {
  if (props.small) return { 'col-xl': true };
  if (props.large) return { 'col-xl-8': true };
  return { '': true };
});
</script>
