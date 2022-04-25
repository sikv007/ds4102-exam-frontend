<template>
  <company-item
    v-for="company in companies.getAll.value"
    :key="company.id"
    :company="company"
  ></company-item>
</template>

<script setup>
import { useCompanyService } from "../../services/companyService";
import CompanyItem from "./CompanyItem.vue"

const companies = useCompanyService();

</script>
