<template>
<TransitionGroup name="list">
  <CompanyItem
    v-for="company in getAll"
    :key="company.id"
    :company="company"
  />
</TransitionGroup>
</template>

<script setup>
// Komponenter
import CompanyItem from './CompanyItem.vue';

// Service
import { getAll } from '../../services/companyService';
</script>
