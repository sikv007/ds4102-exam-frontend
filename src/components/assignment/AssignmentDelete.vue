<template>
  <div class="container p-5">
    <div class="row">
      <h3 class="fw-bold">Ønsker du å slette dette Oppdraget?</h3>
      <p>Handlingen kan ikke angres.</p>
      <div class="col d-flex gap-4 pt-4">
        <BaseButton cta @click="submitForm" title="Bekreft" />
        <BaseButton outline @click="modal.toggleDeleteModal" title="Avbryt" />
      </div>
    </div>
  </div>
</template>

<script setup>
// Service
import * as modal from '../../services/modalService';
import { useRouter } from 'vue-router';
import {
  getOne,
  getAssignments,
  deleteAssignment,
} from '../../services/assigmentService';
import { removeAssignmentFromDeveloper } from '../../services/developerService';

// Props
const props = defineProps({
  id: {
    type: Number,
  },
});

const router = useRouter();

const assignment = getOne(props.id).value;

// Submit Skjema
const submitForm = async () => {
  // Fjern utviklere fra oppdrag når det slettes slik at de blir ledig for nye oppdrag
  if (assignment.team) {
    assignment.team.forEach(async (developer) => {
      await removeAssignmentFromDeveloper(+developer);
    });
  }
  await deleteAssignment(assignment.id);
  modal.deleteModalVisible.value = false;
  router.back();
  await getAssignments();
};
</script>
