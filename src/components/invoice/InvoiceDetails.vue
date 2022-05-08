<template>
  <h1 class="fw-bold mb-2 h2">
    {{ invoice.title }}
  </h1>
  <h3 class="mb-4 h4">{{ invoice.company }}</h3>
  <div class="d-flex gap-2 align-items-center">
    <BaseIcon icon="price" />
    <strong class="mb-0">Beløp:</strong>
    <p class="mb-0">{{ formatPrice(invoice.total) }}</p>
  </div>
  <div class="d-flex gap-2 align-items-center">
    <BaseIcon icon="calendar" />
    <strong class="mb-0">Forfall:</strong>
    <p class="mb-0">{{ formatDate(invoice.dateDue) }}</p>
  </div>
</template>

<script setup>
// Service
import { formatDate, formatPrice } from '../../helpers';

// Props
const props = defineProps({
  invoice: {
    type: Object,
  },
});
</script>
