<template>
  <h1 class="fw-bold mb-2 h2">
    {{ assignment.title }}
  </h1>
  <h3 class="mb-4">{{ company.name }}</h3>
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
  assignment: {
    type: Object,
  },
  company: {
    type: Object,
  },
});

</script>
