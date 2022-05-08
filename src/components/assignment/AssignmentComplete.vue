<template>
  <div class="container p-5">
    <div class="row">
      <h3 class="fw-bold">Ønsker du å markere dette oppdraget som fullført?</h3>
      <p>
        En ny faktura vil bli opprettet basert på informasjonen fra oppdraget.
      </p>
      <div class="col d-flex gap-4 mt-4">
        <BaseButton cta @click="submitForm" title="Bekreft" />
        <BaseButton outline @click="modal.toggleConfirmModal" title="Avbryt" />
      </div>
    </div>
  </div>
</template>

<script setup>
// Service
import { postInvoice } from '../../services/invoiceService';
import {
  getOne,
  deleteAssignment,
  getAssignments,
} from '../../services/assigmentService';
import * as modal from '../../services/modalService';
import { useRouter } from 'vue-router';
import { removeAssignmentFromDeveloper } from '../../services/developerService';

// Props
const props = defineProps({
  id: {
    type: Number,
  },
});

const router = useRouter();

const assignment = getOne(props.id).value;

// Submit skjema
const submitForm = async () => {

  // Opprett faktura objekt når et oppdrag er fullført
  const assignmentData = {
    company: assignment.company,
    product: assignment.name,
    total: assignment.price,
    daysDue: 14,
  };

  // Fjern utviklere fra oppdrag når det er fullført
  if (assignment.team) {
    assignment.team.forEach(async (developer) => {
      await removeAssignmentFromDeveloper(+developer);
    });
  }

  await deleteAssignment(assignment.id);

  modal.confirmModalVisible.value = false;

  router.back();

  await getAssignments();

  await postInvoice(assignmentData);
};
</script>
