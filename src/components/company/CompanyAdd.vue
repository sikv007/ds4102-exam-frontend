<template>
  <CompanyForm
    title="Legg til kunde"
    button="Legg til"
    @submit-form="submitForm"
  />
</template>

<script setup>
import { useCompanyService } from "../../services/companyService";
import CompanyForm from "./CompanyForm.vue";
const companies = useCompanyService();

const submitForm = async (data, image) => {
  await companies.postCompany(data, image);
};
</script>
