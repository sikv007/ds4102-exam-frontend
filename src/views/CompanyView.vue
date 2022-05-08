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
        ><CompanyAdd
      /></BaseModal>
      <div class="row gx-4">
        <div
          class="col-12 mb-4 d-flex justify-content-between align-items-center"
        >
          <h1 class="fw-bold">Kunder</h1>
          <BaseButton
            cta
            @click="modal.toggleFormModal"
            title="Legg til kunde"
          />
        </div>
        <div class="col-12 mb-4">
          <hr />
        </div>
      </div>
      <div class="row gx-4">
        <BaseAlert v-if="numberOfCompanies === 0" message="Fant ingen kunder" />
        <CompanyList v-else />
      </div>
    </div>
  </div>
</template>

<script setup>
// Komponenter
import CompanyList from '../components/company/CompanyList.vue';
import CompanyAdd from '../components/company/CompanyAdd.vue';

// Service
import * as modal from '../services/modalService';
import { numberOfCompanies } from '../services/companyService';
import { error } from '../services/appService';
</script>
