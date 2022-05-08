<template>
  <div v-if="error.value" class="container pt-2 pb-5">
    <BaseAlert :message="error.message" />
  </div>
  <div v-else-if="!company" class="container pt-2 pb-5">
    <BaseAlert message="Kunden du ser etter finnes ikke" />
  </div>
  <div v-else class="container pt-2 pb-5">
    <BaseModal
      :show="modal.formModalVisible.value"
      form
      @close="modal.toggleFormModal"
    >
      <CompanyEdit :id="company.id" />
    </BaseModal>
    <BaseModal
      :show="modal.deleteModalVisible.value"
      confirm
      @close="modal.toggleDeleteModal"
      ><CompanyDelete :id="company.id" />
    </BaseModal>

    <div class="row mb-4 px-4">
      <BaseBack to="/kunder" title="Kunder" />
    </div>

    <div class="row gap-4 px-4">
      <BaseSingle large>
        <div class="col col-lg-4">
          <BaseImage :src="company.image" :alt="company.name" />
        </div>
        <div class="col">
          <CompanyDetails :company="company" />
        </div>
      </BaseSingle>
      <BaseSingle small>
        <h3>Handlinger</h3>
        <BaseButton text @click="modal.toggleFormModal" title="Rediger" />
        <BaseButton text @click="modal.toggleDeleteModal" title="Slett" />
      </BaseSingle>
    </div>
  </div>
</template>

<script setup>
// Komponenter
import CompanyEdit from '../components/company/CompanyEdit.vue';
import CompanyDelete from '../components/company/CompanyDelete.vue';
import CompanyDetails from '../components/company/CompanyDetails.vue';

// Service
import { getOne } from '../services/companyService';
import { getAssignmentsFromCompany } from '../services/assigmentService';
import * as modal from '../services/modalService';
import { error } from '../services/appService';

// Props
const props = defineProps({
  id: {
    type: String,
  },
});

const company = getOne(+props.id);
</script>
