<template>
  <div class="container py-5">
    <div class="row">
      <base-modal :show="modal.modalVisible.value" @close="modal.toggleModal"
        ><add-developer></add-developer
      ></base-modal>
      <div class="row">
        <div class="col-12 mb-4 d-flex justify-content-between align-items-center">
          <h1 class="fw-bold">Utviklere</h1>
          <base-button cta @click="modal.toggleModal"
            >Legg til utvikler</base-button
          >
        </div>
        <div class="col-12 mb-4">
          <hr />
        </div>
      </div>
      <div class="row gap-4">
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
