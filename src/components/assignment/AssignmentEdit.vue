<template>
  <AssignmentForm
    title="Rediger oppdrag"
    button="Lagre"
    @submit-form="submitForm"
    :id="id"
  />
</template>

<script setup>
import { useAssignmentService } from "../../services/assigmentService";
import { useDeveloperService } from "../../services/developerService";
import AssignmentForm from "./AssignmentForm.vue";

const props = defineProps({
  id: Number,
});
const assignments = useAssignmentService();

const developers = useDeveloperService();

const submitForm = async (data) => {
  // developers
  //   .getDevelopersFromAssignment(data)
  //   .value.forEach(async (developer) => {
  //     await developers.addAssignmentToDeveloper(developer.id, data);
  //   });
  // await assignments.putAssignment(data);
};
</script>
