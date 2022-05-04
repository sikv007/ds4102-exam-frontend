<template>
  <div class="container pt-2 pb-5">
    <div class="row gx-0">
      <BaseModal
        :show="modal.formModalVisible.value"
        form
        @close="modal.toggleFormModal"
        ><DeveloperAdd />
      </BaseModal>
      <div class="row gx-4">
        <div
          class="col-12 mb-4 d-flex justify-content-between align-items-center"
        >
          <h1 class="fw-bold">Utviklere</h1>
          <BaseButton
            cta
            @click="modal.toggleFormModal"
            title="Legg til utvikler"
          />
        </div>
        <div class="col-12 mb-4">
          <hr />
        </div>
      </div>
      <div class="row gx-4">
        <BaseEmpty
          v-if="developers.getAll.value.length === 0"
          title="Fant ingen utviklere..."
        />
        <DeveloperList card v-else :data="developers.getAll.value" />
      </div>
    </div>
  </div>
</template>

<script setup>
// Komponenter
import DeveloperList from '../components/developer/DeveloperList.vue';
import DeveloperAdd from '../components/developer/DeveloperAdd.vue';

// Service
import * as modal from '../services/modalService';
import * as developers from '../services/developerService';
</script>
