<template>
  <InvoiceForm
    title="Legg til faktura"
    button="Legg til"
    @submit-form="submitForm"
  />
</template>

<script setup>
import InvoiceForm from "./InvoiceForm.vue";
import { postInvoice } from "../../services/invoiceService";

const submitForm = async (data) => {
  await postInvoice(data);
};
</script>
