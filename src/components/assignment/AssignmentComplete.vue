<template>
  <div class="container p-5">
    <div class="row">
      <h3 class="fw-bold">Ønsker du å markere dette oppdraget som fullført?</h3>
      <p>
        En ny faktura vil bli opprettet basert på informasjonen fra oppdraget.
      </p>
      <div class="col d-flex gap-4">
        <BaseButton warning @click="submitForm" title="Bekreft" />
        <BaseButton outline @click="modal.toggleConfirmModal" title="Avbryt" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { postInvoice } from '../../services/invoiceService';
import {
  getOne,
  deleteAssignment,
  getAssignments,
} from '../../services/assigmentService';
import * as modal from '../../services/modalService';
import { useRouter } from 'vue-router';
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
  const assignmentData = {
    company: assignment.company,
    product: assignment.name,
    total: assignment.price,
    daysDue: 14,
  };

  modal.confirmModalVisible.value = false;
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

  await postInvoice(assignmentData);
};
</script>
