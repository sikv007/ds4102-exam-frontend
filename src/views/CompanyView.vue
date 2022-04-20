<template>
  <div class="container pt-2 pb-5">
    <div class="row gx-0">
      <BaeModal
        :show="modal.formModalVisible.value"
        form
        @close="modal.toggleFormModal"
        ><CompanyAdd
      /></BaeModal>
      <div class="row gx-4">
        <div
          class="col-12 mb-4 d-flex justify-content-between align-items-center"
        >
          <h1 class="fw-bold">Kunder</h1>
          <base-button cta @click="modal.toggleFormModal"
            >Legg til kunde</base-button
          >
        </div>
        <div class="col-12 mb-4">
          <hr />
        </div>
      </div>
      <div class="row gx-4">
        <base-empty v-if="companies.getAll.value.length <= 0"></base-empty>
        <company-list v-else></company-list>
      </div>
    </div>
  </div>
</template>

<script setup>
import CompanyList from "../components/company/CompanyList.vue";
import CompanyAdd from "../components/company/CompanyAdd.vue";
import { useModalService } from "../services/modalService";
import { useCompanyService } from "../services/companyService";
const modal = useModalService();
const companies = useCompanyService();
</script>
