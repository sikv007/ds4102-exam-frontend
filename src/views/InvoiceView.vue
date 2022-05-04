<template>
  <div v-if="error.value" class="container pt-2 pb-5">
    <BaseAlert :message="error.message" />
  </div>
  <div v-else class="container pt-2 pb-5">
    <div class="row gx-0">
      <BaseModal
        :show="modal.formModalVisible.value"
        form
        @close="modal.toggleFormModal"
        ><InvoiceAdd
      /></BaseModal>
      <div class="row gx-4">
        <div
          class="col-12 mb-4 d-flex justify-content-between align-items-center"
        >
          <h1 class="fw-bold">Faktura</h1>
          <BaseButton
            cta
            @click="modal.toggleFormModal"
            title="Legg til faktura"
          />
        </div>
        <div class="col-12 mb-4">
          <hr />
        </div>
      </div>
      <div class="row gx-4">
        <BaseEmpty v-if="getAll.length <= 0" />
        <InvoiceList />
      </div>
    </div>
  </div>
</template>

<script setup>
// Komponenter
import InvoiceList from '../components/invoice/InvoiceList.vue';
import InvoiceAdd from '../components/invoice/InvoiceAdd.vue';

// Service
import * as modal from '../services/modalService';
import { getAll } from '../services/invoiceService';
import { error } from '../services/appService';
</script>
