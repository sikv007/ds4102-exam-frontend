<template>
  <AssignmentForm
    title="Legg til utvikler"
    button="Legg til"
    @submit-form="submitForm"
    @close-form="modal.toggleFormModal"
  />
</template>

<script setup>
// Komponenter
import AssignmentForm from './AssignmentForm.vue';

// Service
import { postAssignment } from '../../services/assigmentService';
import { getAll, addAssignmentToCompany } from '../../services/companyService';
import * as modal from '../../services/modalService';

// Submit Skjema
const submitForm = async (data) => {
  await postAssignment(data);
  const company = getAll.value.find((company) => company.name === data.company);

  // Legg oppdraget til kunden
  await addAssignmentToCompany(company, data);
  
  modal.toggleFormModal();
};
</script>
