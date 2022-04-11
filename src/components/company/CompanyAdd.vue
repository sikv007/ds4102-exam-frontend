<template>
  <company-form
    title="Legg til kunde"
    button="Legg til"
    @submit-form="submitForm"
  ></company-form>
</template>

<script setup>
import { useCompanyService } from "../../services/companyService";
import CompanyForm from "./CompanyForm.vue";
const companies = useCompanyService();

const submitForm = async (data, image) => {
  await companies.postCompany(data, image);
};
</script>
