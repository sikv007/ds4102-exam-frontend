<template>
  <div class="container pt-2 pb-5">
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
            v-if="companies.getAll.value.length > 0"
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
        <BaseEmpty
          v-if="companies.getAll.value.length === 0"
          title="For å kunne legge til oppdrag må du først legge til en kunde."
        />
        <BaseEmpty
          v-else-if="assignments.getAll.value.length === 0"
          title="Fant ingen oppdrag."
        />
        <AssignmentList v-else />
      </div>
    </div>
  </div>
</template>

<script setup>
import AssignmentList from "../components/assignment/AssignmentList.vue";
import AssignmentAdd from "../components/assignment/AssignmentAdd.vue";
import { useModalService } from "../services/modalService";
import { useAssignmentService } from "../services/assigmentService";
import { useCompanyService } from "../services/companyService";
const modal = useModalService();
const assignments = useAssignmentService();
const companies = useCompanyService();
</script>
