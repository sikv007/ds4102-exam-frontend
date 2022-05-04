<template>
  <company-item
    v-for="company in getAll"
    :key="company.id"
    :company="company"
  ></company-item>
</template>

<script setup>
// Komponenter
import CompanyItem from './CompanyItem.vue';

// Service
import { getAll } from '../../services/companyService';
</script>
