<template>
  <div class="container p-5">
    <div class="row">
      <h3 class="fw-bold">Ønsker du å slette denne kunden?</h3>
      <p>
        Handlingen vil slette nåværende oppdrag knyttet til kunden og kan ikke
        angres.
      </p>
      <div class="col d-flex gap-4">
        <BaseButton warning @click="submitForm" title="Bekreft" />
        <BaseButton outline @click="modal.toggleConfirmModal" title="Avbryt" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCompanyService } from '../../services/companyService';
import * as modal from '../../services/modalService';
import { useRouter } from 'vue-router';
import {
  getAssignmentsFromCompany,
  getAssignments,
  deleteAssignmentsFromCompany,
} from '../../services/assigmentService';
import { removeAssignmentFromDeveloper } from '../../services/developerService';

const props = defineProps({
  id: {
    type: Number,
  },
});

const router = useRouter();
const companies = useCompanyService();

const submitForm = async () => {
  const company = companies.getOne(props.id).value;
  const assignment = getAssignmentsFromCompany(company).value;

  // Slett utviklere fra oppdrag knyttet til bedriften om oppdrag eksisterer
  if (assignment.value) {
    assignment.forEach((assignment) => {
      assignment.team.forEach(async developer => {
        await removeAssignmentFromDeveloper(+developer);
      });
    });
  }

  await deleteAssignmentsFromCompany(company);
  await companies.deleteCompany(props.id);
  router.back();
  await companies.getCompanies();
  await getAssignments();
  modal.confirmModalVisible.value = false;
};
</script>
