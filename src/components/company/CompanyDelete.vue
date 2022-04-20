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
import { useCompanyService } from "../../services/companyService";
import { useModalService } from "../../services/modalService";
import { useRouter } from "vue-router";
import { useAssignmentService } from "../../services/assigmentService";
import { useDeveloperService } from "../../services/developerService";

const props = defineProps({
  id: {
    type: Number,
  },
});

const router = useRouter();
const companies = useCompanyService();
const assignments = useAssignmentService();
const developers = useDeveloperService();
const modal = useModalService();

const submitForm = async () => {
  const company = companies.getOne(props.id).value;
  const assignment = assignments.getAssignmentsFromCompany(company).value;

  // Slett utviklere fra oppdrag knyttet til bedriften om oppdrag eksisterer
  if (assignment.value) {
    assignment.forEach((assignment) => {
      assignment.team.forEach((developer) => {
        developers.removeAssignmentFromDeveloper(+developer);
      });
    });
  }

  await assignments.deleteAssignmentsFromCompany(company);
  await companies.deleteCompany(props.id);
  router.back();
  await companies.getCompanies();
  await assignments.getAssignments();
  modal.confirmModalVisible.value = false;
};
</script>
