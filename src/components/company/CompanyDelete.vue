<template>
  <div class="container p-5">
    <div class="row">
      <h3 class="fw-bold">Ønsker du å slette denne kunden?</h3>
      <p>
        Handlingen vil slette nåværende oppdrag knyttet til kunden og kan ikke
        angres.
      </p>
      <div class="col d-flex gap-4 pt-4">
        <BaseButton cta @click="submitForm" title="Bekreft" />
        <BaseButton outline @click="modal.toggleDeleteModal" title="Avbryt" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

// Service
import {
  getOne,
  getCompanies,
  deleteCompany,
} from '../../services/companyService';
import * as modal from '../../services/modalService';
import {
  getAssignmentsFromCompany,
  getAssignments,
  deleteAssignmentsFromCompany,
} from '../../services/assigmentService';
import { removeAssignmentFromDeveloper } from '../../services/developerService';

// Props
const props = defineProps({
  id: {
    type: Number,
  },
});

const router = useRouter();

// Submit skjema
const submitForm = async () => {
  const company = getOne(props.id).value;
  const assignment = getAssignmentsFromCompany(company).value;

  // Fjern utviklere fra oppdrag knyttet til bedriften om oppdrag eksisterer slik at de blir ledig for nye oppdrag
  if (assignment.team) {
    assignment.forEach((assignment) => {
      assignment.team.forEach(async (developer) => {
        await removeAssignmentFromDeveloper(+developer);
      });
    });
  }

  await deleteAssignmentsFromCompany(company);
  await deleteCompany(props.id);
  router.back();
  await getCompanies();
  await getAssignments();
  modal.toggleDeleteModal();
};
</script>
