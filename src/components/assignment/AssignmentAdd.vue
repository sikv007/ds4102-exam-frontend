<template>
  <AssignmentForm
    title="Legg til utvikler"
    button="Legg til"
    @submit-form="submitForm"
  />
</template>

<script setup>
// Komponenter
import AssignmentForm from "./AssignmentForm.vue";

// Service
import { postAssignment, addAssignmentToCompany } from "../../services/assigmentService";
import { useCompanyService } from "../../services/companyService";

const companies = useCompanyService();

const submitForm = async (data) => {
  await postAssignment(data);
  const company = companies.getAll.value.find(
    (company) => company.name === data.company
  );
  await companies.addAssignmentToCompany(company, data);
};
</script>