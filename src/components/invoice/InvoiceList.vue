<template>
  <InvoiceItem
    v-for="invoice in getAll"
    :key="invoice.id"
    :invoice="invoice"
  />
</template>

<script setup>
import { getAll } from "../../services/invoiceService";
import InvoiceItem from "./InvoiceItem.vue"
</script>
