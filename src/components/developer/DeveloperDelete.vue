<template>
  <div class="container p-5">
    <div class="row">
      <h3 class="fw-bold">Ønsker du å slette denne utvikleren?</h3>
      <p>Handlingen kan ikke angres.</p>
      <div class="col d-flex gap-4">
        <BaseButton warning @click="submitForm" title="Bekreft" />
        <BaeButton outline @click="modal.toggleConfirmModal" title="Avbryt" />
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  deleteDeveloper,
  getDevelopers,
} from "../../services/developerService";
import * as modal from "../../services/modalService";
import { useRouter } from "vue-router";

const props = defineProps({
  id: {
    type: Number,
  },
});

const router = useRouter();

const submitForm = async () => {
  await deleteDeveloper(props.id);
  router.back();
  await getDevelopers();
  modal.confirmModalVisible.value = false;
};
</script>
