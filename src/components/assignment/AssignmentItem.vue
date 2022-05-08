<template>
  <BaseCard :to="`/oppdrag/${assignment.id}`">
    <BaseImage :src="company.image" :alt="company.name" small />
    <div>
      <h5 class="fw-bold">{{ assignment.title }}</h5>
      <p class="mb-4">{{ company.name }}</p>
      <p class="h6">Mer info &rarr;</p>
    </div>
  </BaseCard>
</template>

<script setup>
// Service
import { getAll } from '../../services/companyService';

// Props
const props = defineProps({
  assignment: {
    type: Object,
  },
});

// Finn kunde knyttet til oppdrag
const company = getAll.value.find(
  (company) => company.id === +props.assignment.company
);
</script>
