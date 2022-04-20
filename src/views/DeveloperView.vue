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
import { defineAsyncComponent } from "@vue/runtime-core";
import DeveloperList from "../components/developer/DeveloperList.vue";
const DeveloperAdd = defineAsyncComponent(() =>
  import("../components/developer/DeveloperAdd.vue")
);
import { useModalService } from "../services/modalService";
import { useDeveloperService } from "../services/developerService";
const modal = useModalService();
const developers = useDeveloperService();
</script>
