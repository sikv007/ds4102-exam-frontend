<template>
  <div class="container pt-2 pb-5">
    <div class="row gx-0">
      <base-modal
        :show="modal.formModalVisible.value"
        form
        @close="modal.toggleFormModal"
        ><developer-add></developer-add
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
        <base-empty v-if="developers.getAll.value.length <= 0"></base-empty>
        <developer-list v-else></developer-list>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { ref } from "vue";
import DeveloperList from "../components/developer/DeveloperList.vue";
import DeveloperAdd from "../components/developer/DeveloperAdd.vue";
import { useModalService } from "../services/modalService";
import { useDeveloperService } from "../services/developerService";
const modal = useModalService();
const developers = useDeveloperService();
</script>
