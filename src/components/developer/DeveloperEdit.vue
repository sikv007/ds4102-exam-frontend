<template>
  <DeveloperForm
    title="Rediger utvikler"
    button="Lagre"
    :id="id"
    @submit-form="submitForm"
    @close-form="modal.toggleFormModal"
  />
</template>

<script setup>
// Komponenter
import DeveloperForm from './DeveloperForm.vue';

// Service
import { putDeveloper } from '../../services/developerService';
import * as modal from '../../services/modalService';

// Props
const props = defineProps({
  id: Number,
});

// Submit skjema
const submitForm = async (data, image) => {
  await putDeveloper(data, image);
  modal.toggleFormModal();
};
</script>
