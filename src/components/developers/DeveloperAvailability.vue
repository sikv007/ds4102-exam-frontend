<template>
  <span
    class="availability"
    :class="{...developers.developerAvailable(developer).class, ...availabilityClass}"
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
import { useDevelopersService } from "../../services/developersService";

const props = defineProps({
  developer: {
    type: Object,
  },
  small: {
    type: Boolean,
  },
});

const developers = useDevelopersService();

const availabilityClass = computed(() => {
  return props.small ? { "availability--small": true } : { "availability--large": true };
});
</script>
