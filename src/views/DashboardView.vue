<template>
  <div class="container">
    <div class="row">
      <h3 class="fw-bold mb-5">Velkommen Admin!</h3>
    </div>

    <div class="row gap-4">
      <div class="col-12 col-xs-12 col-md-6 card p-5">
        <span>Utviklere på oppdrag</span>
        <h2 class="fw-bold">{{ devsOnAssignment }}/{{ numberOfDevs }}</h2>
        <router-link to="/faktura">Se oversikt over utviklere</router-link>
      </div>
      <div class="col card p-5">
        <span>Totalt inntjent</span>
        <h2 class="fw-bold">{{ totalEarned }}</h2>
        <router-link to="/faktura">Se hele fakturaoversikten</router-link>
      </div>
      <div class="col card p-5">
        <span>Antall pågående oppdrag</span>
        <h2 class="fw-bold">{{ numberOfAssignments }}</h2>
        <router-link to="/faktura">Se hele fakturaoversikten</router-link>
      </div>
      <div class="col card p-5">
        <span>Kunder</span>
        <h2 class="fw-bold">{{ numberOfAssignments }}</h2>
        <router-link to="/faktura">Se hele fakturaoversikten</router-link>
      </div>
      <div class="col card p-5">
        <span>Kunder</span>
        <h2 class="fw-bold">{{ numberOfCompanies }}</h2>
        <router-link to="/faktura">Se hele fakturaoversikten</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { totalEarned } from '../services/invoiceService';
import { numberOfDevs, devsOnAssignment } from '../services/developerService';
import { numberOfAssignments } from '../services/assigmentService';
import { numberOfCompanies } from '../services/companyService';
</script>
