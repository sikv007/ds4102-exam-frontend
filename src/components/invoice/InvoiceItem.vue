<template>
  <RouterLink :to="`/faktura/${invoice.id}`">
    <BaseList>
      <div>
        <h6 class="mb-0">{{ invoice.title }}</h6>
        <p class="mb-0">{{ invoice.company }}</p>
        <p class="mb-0 small">({{ daysDue(invoice).value }})</p>
      </div>
      <p class="mb-0 ms-auto">Detaljer</p>
    </BaseList>
  </RouterLink>
</template>

<script setup>
// Service
import { daysDue } from '../../services/invoiceService';

// Props
const props = defineProps({
  invoice: {
    type: Object,
  },
});
</script>
