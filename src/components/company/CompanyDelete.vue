<template>
  <div class="container p-5">
    <div class="row">
      <h3 class="fw-bold">Ønsker du å slette denne kunden?</h3>
      <p>Handlingen kan ikke angres.</p>
      <div class="col d-flex gap-4">
        <base-button warning @click="submitForm">Bekreft</base-button>
        <base-button outline @click="modal.toggleConfirmModal">Avbryt</base-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCompanyService } from "../../services/companyService";
import { useModalService } from "../../services/modalService";
import { useRouter } from "vue-router";

const props = defineProps({
  id: {
    type: Number,
  },
});

const router = useRouter();
const companies = useCompanyService();
const modal = useModalService();
const submitForm = async () => {
  await companies.deleteCompany(props.id);
  router.back();
  await companies.getCompanies();
  modal.confirmModalVisible.value = false;
};
</script>
