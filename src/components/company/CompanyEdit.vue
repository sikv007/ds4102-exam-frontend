<template>
  <company-form
    title="Rediger kunde"
    button="Lagre"
    @submit-form="submitForm"
    :id="id"
  ></company-form>
</template>

<script setup>
import { useCompanyService } from "../../services/companyService";
import CompanyForm from "./CompanyForm.vue";

const props = defineProps({
  id: Number
})
const companies = useCompanyService();

const submitForm = async (data, image) => {
  await companies.putCompany(data, image);
};
</script>
