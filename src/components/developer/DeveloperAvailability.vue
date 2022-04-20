<template>
  <span
    v-if="preview"
    class="availability"
    :class="{
      ...developers.developerAvailable(developer).class,
      ...availabilityClass,
    }"
  >
    <span class="availability-circle">
      <span class="availability-circle--outer"></span>
      <span class="availability-circle--inner"></span>
    </span>
  </span>
  <span v-else
    class="availability"
    :class="{
      ...developers.developerAvailable(developer).class,
      ...availabilityClass,
    }"
  >
    <span class="availability-circle">
      <span class="availability-circle--outer"></span>
      <span class="availability-circle--inner"></span>
    </span>

    <span>{{ developers.developerAvailable(developer).text }}</span>
  </span>
</template>

<script setup>
import { computed } from "@vue/runtime-core";
import { useDeveloperService } from "../../services/developerService";

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

const developers = useDeveloperService();

const availabilityClass = computed(() => {
  if (props.small) return { "availability--small": true };
  if (props.preview) return { "availability--preview": true };
  else return { "availability--large": true };
});
</script>
