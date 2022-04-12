<template>
  <div v-if="company" class="container pt-2 pb-5">
    <base-modal
      :show="modal.formModalVisible.value"
      form
      @close="modal.toggleFormModal"
    >
      <company-edit :id="company.id"></company-edit>
    </base-modal>
    <base-modal
      :show="modal.confirmModalVisible.value"
      confirm
      @close="modal.toggleConfirmModal"
      ><company-delete :id="company.id"></company-delete
    ></base-modal>
    <div class="profile">
      <div class="container">
        <div class="row mb-4">
          <base-back to="/kunder" title="Kunder"></base-back>
          <hr />
        </div>
        <div class="row p-4">
          <div
            class="col-12 col-xs-12 col-md-12 col-lg-6 col-xl-4 d-flex justify-content-center"
          >
            <base-image
              :src="company.image"
              :alt="company.name"
            ></base-image>
          </div>
          <div class="col-12 col-lg-6">
            <h1 class="fw-bold mb-2 h2">
              {{ company.name }}
            </h1>

            <div class="d-flex gap-3 mb-5">
              <base-button cta @click="modal.toggleFormModal"
                >Rediger</base-button
              ><base-button warning @click="modal.toggleConfirmModal"
                >Slett</base-button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCompanyService } from "../services/companyService";
import { useModalService } from "../services/modalService";
import CompanyEdit from "../components/company/CompanyEdit.vue"
import CompanyDelete from "../components/company/CompanyDelete.vue"

const props = defineProps({
  id: {
    type: String,
  },
});

const companies = useCompanyService();
const company = companies.getOne(+props.id);

const modal = useModalService();
</script>
