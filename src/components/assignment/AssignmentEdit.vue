<template>
  <AssignmentForm
    title="Rediger oppdrag"
    button="Lagre"
    @submit-form="submitForm"
    @close-form="modal.toggleFormModal"
    :id="id"
  />
</template>

<script setup>
// Komponenter
import AssignmentForm from './AssignmentForm.vue';

// Service
import { putAssignment } from '../../services/assigmentService';
import * as modal from '../../services/modalService';

// Props
const props = defineProps({
  id: Number,
});

// Submit skjema
const submitForm = async (data) => {
  await putAssignment(data);
  modal.toggleFormModal();
};
</script>
