<template>
  <base-card :to="`/kunder/${company.id}`">
    <base-image
      :src="company.image"
      :alt="company.name"
      small
    ></base-image>
    <div>
      <h5 class="fw-bold mb-0">{{ company.name }}</h5>
      <p class="h6">Mer info &rarr;</p>
    </div>
  </base-card>
</template>

<script setup>
import { useCompanyService } from "../../services/companyService";

const props = defineProps({
  company: {
    type: Object,
  },
});

const companies = useCompanyService();
</script>