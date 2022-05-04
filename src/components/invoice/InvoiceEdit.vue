<template>
  <InvoiceForm
    title="Rediger faktura"
    button="Lagre"
    :id="id"
    @submit-form="submitForm"
    @close-form="modal.toggleFormModal"
  />
</template>

<script setup>
// Komponenter
import InvoiceForm from './InvoiceForm.vue';

// Service
import { putInvoice } from '../../services/invoiceService';
import * as modal from '../../services/modalService';

// Props
const props = defineProps({
  id: Number,
});

// Submit skjema
const submitForm = async (data) => {
  await putInvoice(data);
  modal.toggleFormModal();
};
</script>
