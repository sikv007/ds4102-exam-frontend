<template>
  <h1 class="fw-bold mb-2 h2">
    {{ invoice.title }}
  </h1>
  <h3 class="mb-4 h4">{{ invoice.company }}</h3>
  <div class="d-flex gap-2 align-items-center">
    <!-- <BaseIcon icon="calendar" />
    <strong class="mb-0">Fødselsdato:</strong>
    <p class="mb-0">{{ dateOfBirth(developer).value }}</p> -->
  </div>
  <div class="d-flex gap-2 align-items-center">
    <!-- <BaseIcon icon="mail" />
    <strong class="mb-0">E-post:</strong>
    <a :href="`mailto:${developer.email}`">{{ developer.email }}</a> -->
  </div>
  <div class="d-flex gap-2 align-items-center mb-5">
    <!-- <BaseIcon icon="phone" />
    <strong class="mb-0">Mobil:</strong>
    <a :href="`tel:${developer.phone}`">{{ developer.phone }}</a> -->
  </div>
</template>

<script setup>
// Service
import { fullName, dateOfBirth } from '../../services/developerService';

// Props
const props = defineProps({
  invoice: {
    type: Object,
  },
});
</script>
