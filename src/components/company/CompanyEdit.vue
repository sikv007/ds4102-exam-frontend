<template>
  <CompanyForm
    title="Rediger kunde"
    button="Lagre"
    :id="id"
    @submit-form="submitForm"
    @close-form="modal.toggleFormModal"
  />
</template>

<script setup>
// Komponenter
import CompanyForm from './CompanyForm.vue';

// Servides
import { putCompany } from '../../services/companyService';
import * as modal from '../../services/modalService';

// Props
const props = defineProps({
  id: Number,
});

// Submit skjema
const submitForm = async (data, image) => {
  await putCompany(data, image);
  modal.toggleFormModal();
};
</script>
