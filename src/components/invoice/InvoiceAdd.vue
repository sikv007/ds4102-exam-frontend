<template>
  <InvoiceForm
    title="Legg til faktura"
    button="Legg til"
    @submit-form="submitForm"
    @close-form="modal.toggleFormModal"
  />
</template>

<script setup>
// Komponenter
import InvoiceForm from './InvoiceForm.vue';

// Service
import { postInvoice } from '../../services/invoiceService';
import * as modal from '../../services/modalService';

// Submit skjema
const submitForm = async (data) => {
  await postInvoice(data);
  modal.toggleFormModal();
};
</script>
