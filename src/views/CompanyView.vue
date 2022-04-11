<template>
  <div class="container pt-2 pb-5">
    <div class="row gx-0">
      <base-modal
        :show="modal.formModalVisible.value"
        form
        @close="modal.toggleFormModal"
        ><company-add></company-add
      ></base-modal>
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
        <developer-list v-else></developer-list>
      </div>
    </div>
  </div>
</template>

<script setup>
import DeveloperList from "../components/developers/DeveloperList.vue";
import CompanyAdd from "../components/company/CompanyAdd.vue";
import { useModalService } from "../services/modalService";
import {useCompanyService} from "../services/companyService"
const modal = useModalService();
const companies = useCompanyService();
</script>
