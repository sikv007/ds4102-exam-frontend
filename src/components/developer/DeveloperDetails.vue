<template>
  <h1 class="fw-bold mb-2 h2">
    {{ fullName(developer).value }}
  </h1>
  <h3 class="mb-4 h4">{{ developer.jobTitle }}</h3>
  <div class="d-flex gap-2 align-items-center">
    <BaseIcon icon="calendar" />
    <strong class="mb-0">Fødselsdato:</strong>
    <p class="mb-0">{{ dateOfBirth(developer).value }}</p>
  </div>
  <div class="d-flex gap-2 align-items-center">
    <BaseIcon icon="mail" />
    <strong class="mb-0">E-post:</strong>
    <a :href="`mailto:${developer.email}`">{{ developer.email }}</a>
  </div>
  <div class="d-flex gap-2 align-items-center mb-5">
    <BaseIcon icon="phone" />
    <strong class="mb-0">Mobil:</strong>
    <a :href="`tel:${developer.phone}`">{{ developer.phone }}</a>
  </div>
</template>

<script setup>
import { fullName, dateOfBirth } from '../../services/developerService';

const props = defineProps({
  developer: {
    type: Object,
  },
});
</script>
