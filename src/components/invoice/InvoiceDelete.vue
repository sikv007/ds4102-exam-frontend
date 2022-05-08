<template>
  <div class="container p-5">
    <div class="row">
      <h3 class="fw-bold">Ønsker du å slette denne utvikleren?</h3>
      <p>Handlingen kan ikke angres.</p>
      <div class="col d-flex gap-4">
        <BaseButton cta @click="submitForm" title="Bekreft" />
        <BaseButton outline @click="modal.toggleDeleteModal" title="Avbryt" />
      </div>
    </div>
  </div>
</template>

<script setup>
// Service
import { deleteInvoice, getInvoices } from '../../services/invoiceService';
import * as modal from '../../services/modalService';
import { useRouter } from 'vue-router';

// Props
const props = defineProps({
  id: {
    type: Number,
  },
});

const router = useRouter();

// Submit skjema
const submitForm = async () => {
  await deleteInvoice(props.id);
  router.back();
  await getInvoices();
  modal.toggleDeleteModal();
};
</script>
