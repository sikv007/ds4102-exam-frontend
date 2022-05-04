<template>
  <CompanyForm
    title="Legg til kunde"
    button="Legg til"
    @submit-form="submitForm"
    @close-form="modal.toggleFormModal"
  />
</template>

<script setup>
// Komponenter
import CompanyForm from './CompanyForm.vue';

// Service
import { postCompany } from '../../services/companyService';
import * as modal from '../../services/modalService';

// Submit skjema
const submitForm = async (data, image) => {
  await postCompany(data, image);
  modal.toggleFormModal();
};
</script>
