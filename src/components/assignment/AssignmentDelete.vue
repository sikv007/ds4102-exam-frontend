<template>
  <div class="container p-5">
    <div class="row">
      <h3 class="fw-bold">Ønsker du å slette dette Oppdraget?</h3>
      <p>Handlingen kan ikke angres.</p>
      <div class="col d-flex gap-4">
        <BaseButton warning @click="submitForm" title="Bekreft" />
        <BaseButton outline @click="modal.toggleDeleteModal" title="Avbryt" />
      </div>
    </div>
  </div>
</template>

<script setup>
import * as modal from '../../services/modalService';
import { useRouter } from 'vue-router';
import {
  getOne,
  getAssignments,
  deleteAssignment,
} from '../../services/assigmentService';
import { removeAssignmentFromDeveloper } from '../../services/developerService';

const props = defineProps({
  id: {
    type: Number,
  },
});

const router = useRouter();

const assignment = getOne(props.id).value;

console.log(assignment);

const submitForm = async () => {
  modal.deleteModalVisible.value = false;
  if (assignment.team) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    assignment.team.forEach(async (developer) => {
      await removeAssignmentFromDeveloper(+developer);
      await new Promise((resolve) => setTimeout(resolve, 1000));
    });
  }
  await new Promise((resolve) => setTimeout(resolve, 1000));
  await deleteAssignment(assignment.id);
  router.back();
  await getAssignments();
};
</script>