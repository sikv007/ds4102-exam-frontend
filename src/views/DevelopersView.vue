<template>
  <div class="container pt-2 pb-5">
    <div class="row gx-0">
      <base-modal
        :show="modal.formModalVisible.value"
        form
        @close="modal.toggleFormModal"
        ><add-developer></add-developer
      ></base-modal>
      <div class="row gx-4">
        <div
          class="col-12 mb-4 d-flex justify-content-between align-items-center"
        >
          <h1 class="fw-bold">Utviklere</h1>
          <base-button cta @click="modal.toggleFormModal"
            >Legg til utvikler</base-button
          >
        </div>
        <div class="col-12 mb-4">
          <hr />
        </div>
      </div>
      <div class="row gx-4">
        <developers-list></developers-list>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { ref } from "vue";
import DevelopersList from "../components/developers/DevelopersList.vue";
import AddDeveloper from "../components/developers/AddDeveloper.vue";
import { useModalService } from "../services/modalService";
const modal = useModalService();
</script>
