<template>
  <router-link class="col-12 col-lg-6 col-xl-4" :to="`/utviklere/${developer.id}`">
    <article class="card p-4 d-flex gap-4 align-items-center">
      <figure class="flex-shrink-0">
        <img :src="developer.image" :alt="developers.fullName(developer)" />
      </figure>
      <div>
        <h5 class="fw-bold mb-0">{{ developers.fullName(developer) }}</h5>
        <p>{{ developer.jobTitle }}</p>
        <p class="h6">Mer info &rarr;</p>
      </div>
    </article>
  </router-link>
</template>

<script setup>
import { useDevelopersService } from "../../services/developersService";

const props = defineProps({
  developer: {
    type: Object,
  },
});

const developers = useDevelopersService();
</script>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
  display: inline-block;
}
</style>
