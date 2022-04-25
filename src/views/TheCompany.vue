<template>
  <div v-if="company" class="container pt-2 pb-5">
    <BaseModal
      :show="modal.formModalVisible.value"
      form
      @close="modal.toggleFormModal"
    >
      <CompanyEdit :id="company.id" />
    </BaseModal>
    <BaseModal
      :show="modal.confirmModalVisible.value"
      confirm
      @close="modal.toggleConfirmModal"
      ><CompanyDelete :id="company.id" />
    </BaseModal>
    <div class="profile">
      <div class="container">
        <div class="row mb-4">
          <BaseBack to="/kunder" title="Kunder" />
        </div>
        <div class="row p-4">
          <div
            class="col-12 col-xs-12 col-md-12 col-lg-6 col-xl-4 d-flex justify-content-center"
          >
            <BaseImage :src="company.image" :alt="company.name" />
          </div>
          <div class="col-12 col-lg-6">
            <h1 class="fw-bold mb-2 h2">
              {{ company.name }}
            </h1>

            <div class="d-flex gap-3 mb-5">
              <BaseButton cta @click="modal.toggleFormModal" title="Rediger" />
              <BaseButton
                warning
                @click="modal.toggleConfirmModal"
                title="Slett"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from "@vue/runtime-core";
import { useCompanyService } from "../services/companyService";
import * as modal from "../services/modalService";
const CompanyEdit = defineAsyncComponent(() =>
  import("../components/company/CompanyEdit.vue")
);
const CompanyDelete = defineAsyncComponent(() =>
  import("../components/company/CompanyDelete.vue")
);

const props = defineProps({
  id: {
    type: String,
  },
});

const companies = useCompanyService();
const company = companies.getOne(+props.id);
console.log(company);

</script>
