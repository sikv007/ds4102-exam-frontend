<template>
  <AssignmentForm
    title="Rediger oppdrag"
    button="Lagre"
    @submit-form="submitForm"
    :id="id"
  />
</template>

<script setup>
import { putAssignment } from "../../services/assigmentService";
import AssignmentForm from "./AssignmentForm.vue";

const props = defineProps({
  id: Number,
});


const submitForm = async (data) => {
  await putAssignment(data);
};
</script>