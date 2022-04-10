<template>
  <base-card :to="`/utviklere/${developer.id}`">
    <base-image
      :src="developer.image"
      :alt="developers.fullName(developer)"
      small
    ></base-image>
    <div>
      <developer-availability
        :developer="developer"
        small
      ></developer-availability>
      <h5 class="fw-bold mb-0">{{ developers.fullName(developer) }}</h5>
      <p>{{ developer.jobTitle }}</p>
      <p class="h6">Mer info &rarr;</p>
    </div>
  </base-card>
</template>

<script setup>
import { useDeveloperService } from "../../services/developerService";
import DeveloperAvailability from "./DeveloperAvailability.vue";

const props = defineProps({
  developer: {
    type: Object,
  },
});

const developers = useDeveloperService();
</script>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
  display: inline-block;
}
</style>
