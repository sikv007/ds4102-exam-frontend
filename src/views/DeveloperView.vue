<template>
  <div v-if="error.value" class="container pt-2 pb-5 px-4">
    <BaseAlert :message="error.message" />
  </div>
  <div v-else class="container pt-2 pb-5">
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
        <BaseAlert v-if="numberOfDevs === 0" message="Fant ingen utviklere" />
        <DeveloperList card v-else :data="getAll" />
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
import { getAll, numberOfDevs } from '../services/developerService';
import { error } from '../services/appService';
</script>
