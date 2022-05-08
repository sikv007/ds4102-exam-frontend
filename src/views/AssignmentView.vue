<template>
  <div v-if="error.value" class="container pt-2 pb-5">
    <BaseAlert :message="error.message" />
  </div>
  <div v-else class="container pt-2 pb-5">
    <div class="row gx-0">
      <BaseModal
        :show="modal.formModalVisible.value"
        form
        @close="modal.toggleFormModal"
      >
        <AssignmentAdd />
      </BaseModal>
      <div class="row gx-4">
        <div
          class="col-12 mb-4 d-flex justify-content-between align-items-center"
        >
          <h1 class="fw-bold">Oppdrag</h1>
          <BaseButton
            v-if="numberOfCompanies > 0"
            cta
            @click="modal.toggleFormModal"
            title="Legg til oppdrag"
          />
        </div>
        <div class="col-12 mb-4">
          <hr />
        </div>
      </div>
      <div class="row gx-4">
        <BaseAlert
          v-if="numberOfCompanies === 0"
          message="For å legge til oppdrag må du først legge til kunder"
        />
        <BaseAlert
          v-else-if="numberOfAssignments === 0"
          message="Fant ingen oppdrag"
        />
        <AssignmentList v-else />
      </div>
    </div>
  </div>
</template>

<script setup>
// Komponenter
import AssignmentList from '../components/assignment/AssignmentList.vue';
import AssignmentAdd from '../components/assignment/AssignmentAdd.vue';

// Service
import * as modal from '../services/modalService';
import {
  getAll as assignments,
  numberOfAssignments,
} from '../services/assigmentService';
import { numberOfCompanies } from '../services/companyService';
import { error } from '../services/appService';
</script>
