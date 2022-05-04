<template>
  <div v-if="invoice" class="container pt-2 pb-5">
    <BaseModal
      :show="modal.formModalVisible.value"
      form
      @close="modal.toggleFormModal"
    >
      <InvoiceEdit :id="invoice.id" />
    </BaseModal>
    <BaseModal
      :show="modal.deleteModalVisible.value"
      confirm
      @close="modal.toggleDeleteModal"
      ><InvoiceDelete :id="invoice.id" />
    </BaseModal>

    <div class="row mb-4 px-4">
      <BaseBack to="/faktura" title="Faktura" />
    </div>

    <div class="row mb-4 gap-4 px-4">
      <BaseSingle large>
        <InvoiceDetails :invoice="invoice" />
      </BaseSingle>
      <BaseSingle small>
        <BaseButton text @click="modal.toggleFormModal" title="Rediger" />
        <BaseButton text @click="modal.toggleDeleteModal" title="Slett" />
      </BaseSingle>
    </div>
  </div>
</template>

<script setup>
// Komponenter
import InvoiceDetails from '../components/invoice/InvoiceDetails.vue';
import InvoiceEdit from '../components/invoice/InvoiceEdit';
import InvoiceDelete from '../components/invoice/InvoiceDelete';

// Service
import { getOne } from '../services/invoiceService';
import * as modal from '../services/modalService';

// Props
const props = defineProps({
  id: {
    type: String,
  },
});

const invoice = getOne(+props.id);
</script>
