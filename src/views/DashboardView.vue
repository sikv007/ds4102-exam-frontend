<template>
  <div v-if="error.value" class="container pt-2 pb-5">
    <BaseAlert :message="error.message" />
  </div>
  <div v-else class="container pt-2 pb-5 px-4">
    <div class="row">
      <h3 class="fw-bold mb-5">Velkommen Admin!</h3>
    </div>

    <div class="row gx-4">
      <DashboardItem
        class="col-lg-5 mb-4"
        to="/utviklere"
        title="Utviklere på oppdrag"
        :content="`${devsOnAssignment}/${numberOfDevs}`"
        link="Se oversikt over utviklere"
      />

      <DashboardItem
        class="col-lg-7 mb-4"
        to="/faktura"
        title="Driftsinntekter"
        :content="totalEarned"
        link="Se oversikt over fakturaer"
      />

      <DashboardItem
        class="col-lg-7 mb-4"
        to="/oppdrag"
        title="Pågående oppdrag"
        :content="numberOfAssignments"
        link="Se oversikt over oppdrag"
      />

      <DashboardItem
        class="col-lg-5 mb-4"
        to="/kunder"
        title="Kunder"
        :content="numberOfCompanies"
        link="Se oversikt over kunder"
      />
    </div>
  </div>
</template>

<script setup>
import DashboardItem from '../components/dashboard/DashboardItem.vue';

import { totalEarned } from '../services/invoiceService';
import { numberOfDevs, devsOnAssignment } from '../services/developerService';
import { numberOfAssignments } from '../services/assigmentService';
import { numberOfCompanies } from '../services/companyService';
import { error } from '../services/appService';
</script>
