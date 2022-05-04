<template>
  <h1 class="fw-bold mb-2 h2">
    {{ company.name }}
  </h1>
  <h3 class="mb-4 h4">{{ company.address }}</h3>
  <div class="d-flex gap-2 align-items-center">
    <BaseIcon icon="calendar" />
    <strong class="mb-0">Organisasjonsnummer:</strong>
    <p class="mb-0">{{ company.organizationNumber }}</p>
  </div>
  <div class="d-flex gap-2 align-items-center">
    <BaseIcon icon="person" />
    <strong class="mb-0">Kontaktperson:</strong>
    <p class="mb-0">{{ company.contactName }}</p>
  </div>
  <div class="d-flex gap-2 align-items-center">
    <BaseIcon icon="mail" />
    <strong class="mb-0">E-post:</strong>
    <p class="mb-0">{{ company.contactEmail }}</p>
  </div>
</template>

<script setup>
// Props
const props = defineProps({
  company: {
    type: Object,
  },
});
</script>
