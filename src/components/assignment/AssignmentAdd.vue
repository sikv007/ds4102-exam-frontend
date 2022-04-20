<template>
  <AssignmentForm
    title="Legg til utvikler"
    button="Legg til"
    @submit-form="submitForm"
  />
</template>

<script setup>
import AssignmentForm from "./AssignmentForm.vue";
import { useAssignmentService } from "../../services/assigmentService";
import { useCompanyService } from "../../services/companyService";

const assignments = useAssignmentService();
const companies = useCompanyService();

const submitForm = async (data) => {
  await assignments.postAssignment(data);
  const company = companies.getAll.value.find(
    (company) => company.name === data.company
  );
  await companies.addAssignmentToCompany(company, data);
};
</script>
