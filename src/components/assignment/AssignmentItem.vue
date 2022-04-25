<template>
  <BaseCard :to="`/oppdrag/${assignment.id}`">
    <BaseImage
      :src="company.image"
      :alt="company.name"
      small
    />
    <div>
      <h5 class="fw-bold mb-0">{{ assignment.title }}</h5>
      <p>{{ assignment.company }}</p>
      <p class="h6">Mer info &rarr;</p>
    </div>
  </BaseCard>
</template>

<script setup>
import { useCompanyService } from "../../services/companyService";

const props = defineProps({
  assignment: {
    type: Object,
  },
});

const companies = useCompanyService();
const company = companies.getAll.value.find((company) => company.name === props.assignment.company);
</script>
