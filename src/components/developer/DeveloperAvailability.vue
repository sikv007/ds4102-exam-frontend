<template>
  <span
    v-if="preview"
    class="availability"
    :class="{
      ...developerAvailable(developer).class,
      ...availabilityClass,
    }"
  >
    <span class="availability-circle">
      <span class="availability-circle--outer"></span>
      <span class="availability-circle--inner"></span>
    </span>
  </span>
  <span
    v-else
    class="availability"
    :class="{
      ...developerAvailable(developer).class,
      ...availabilityClass,
    }"
  >
    <span class="availability-circle">
      <span class="availability-circle--outer"></span>
      <span class="availability-circle--inner"></span>
    </span>

    <span>{{ developerAvailable(developer).text }}</span>
  </span>
</template>

<script setup>
// Service
import { computed } from '@vue/runtime-core';
import { developerAvailable } from '../../services/developerService';

// Props
const props = defineProps({
  developer: {
    type: Object,
  },
  small: {
    type: Boolean,
  },
  preview: {
    type: Boolean,
  },
});

// Klasser for å vise om utvikler er på oppdrag eller ikke i forskjellige størrelser
const availabilityClass = computed(() => {
  if (props.small) return { 'availability--small': true };
  if (props.preview) return { 'availability--preview': true };
  else return { 'availability--large': true };
});
</script>
