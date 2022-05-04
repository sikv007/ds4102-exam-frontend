<template>
  <DeveloperForm
    title="Legg til utvikler"
    button="Legg til"
    @submit-form="submitForm"
    @close-form="modal.toggleFormModal"
  />
</template>

<script setup>
// Komponenter
import DeveloperForm from './DeveloperForm.vue';

// Service
import { postDeveloper } from '../../services/developerService';
import * as modal from '../../services/modalService';

// Submit skjema
const submitForm = async (data, image) => {
  await postDeveloper(data, image);
  modal.toggleFormModal();
};
</script>
