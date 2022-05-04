<template>
  <InvoiceItem v-for="invoice in getAll" :key="invoice.id" :invoice="invoice" />
</template>

<script setup>
// Komponenter
import InvoiceItem from './InvoiceItem.vue';

// Service
import { getAll } from '../../services/invoiceService';
</script>
