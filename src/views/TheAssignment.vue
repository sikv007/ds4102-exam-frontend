<template>
  <div v-if="error.value" class="container pt-2 pb-5">
    <BaseAlert :message="error.message" />
  </div>
  <div v-else-if="!assignment" class="container pt-2 pb-5">
    <BaseAlert message="Oppdraget du ser etter finnes ikke" />
  </div>
  <section v-else class="container pt-2 pb-5">
    <BaseModal
      :show="modal.formModalVisible.value"
      form
      @close="modal.toggleFormModal"
    >
      <AssignmentEdit :id="assignment.id" />
    </BaseModal>
    <BaseModal
      :show="modal.deleteModalVisible.value"
      confirm
      @close="modal.toggleDeleteModal"
    >
      <AssignmentDelete :id="assignment.id" />
    </BaseModal>
    <BaseModal
      :show="modal.confirmModalVisible.value"
      confirm
      @close="modal.toggleConfirmModal"
    >
      <AssignmentComplete :id="assignment.id" />
    </BaseModal>

    <div class="row mb-4 px-4">
      <BaseBack to="/oppdrag" title="Oppdrag" />
    </div>

    <div class="row gap-4 px-4">
      <BaseSingle large>
        <div class="col-12 col-lg-4 mb-4">
          <BaseImage :src="company.image" :alt="company.name" />
        </div>
        <div class="col mb-4">
          <AssignmentDetails :assignment="assignment" :company="company" />
        </div>
        <div class="col-12 position-relative">
          <h5 class="mb-2">Utviklere på dette oppdraget</h5>
          <BaseAlert
            v-if="getDevelopersFromAssignment(assignment.id).value.length === 0"
            message="Fant ingen utviklere knyttet til dette oppdraget"
          />
          <DeveloperList
            list
            :data="getDevelopersFromAssignment(assignment.id).value"
            @event="removeAssignment"
            button-text="Fjern fra oppdrag"
          />
        </div>
      </BaseSingle>

      <BaseSingle small>
        <h3>Handlinger</h3>
        <div class="col">
          <BaseButton
            class="w-100"
            text
            @click="modal.toggleFormModal"
            title="Rediger"
          />
        </div>
        <div>
          <BaseButton
            class="w-100"
            text
            @click="modal.toggleDeleteModal"
            title="Slett"
          />
        </div>
        <BaseButton
          class="w-100"
          text
          @click="modal.toggleConfirmModal"
          title="Marker som fullført"
        />
      </BaseSingle>

      <BaseSingle class="position-relative">
        <h5 class="mb-4 fw-bold">Ledige utviklere</h5>
        <BaseAlert
          v-if="getAvailableDevelopers.length === 0"
          message="Fant ingen ledige utviklere"
        />
        <DeveloperList
          v-else
          :data="getAvailableDevelopers"
          @event="addAssignment"
          button-text="Legg til i oppdrag"
        />
      </BaseSingle>
    </div>
  </section>
</template>

<script setup>
// Komponenter
import DeveloperList from '../components/developer/DeveloperList.vue';
import AssignmentEdit from '../components/assignment/AssignmentEdit.vue';
import AssignmentDelete from '../components/assignment/AssignmentDelete.vue';
import AssignmentComplete from '../components/assignment/AssignmentComplete.vue';
import AssignmentDetails from '../components/assignment/AssignmentDetails.vue';

// Services
import { findCompanyByAssignment } from '../services/companyService';
import * as modal from '../services/modalService';
import {
  getOne,
  addDeveloperToAssignment,
  removeDeveloperFromAssignment,
} from '../services/assigmentService';
import {
  addAssignmentToDeveloper,
  removeAssignmentFromDeveloper,
  getAvailableDevelopers,
  getDevelopersFromAssignment,
} from '../services/developerService';
import { error } from '../services/appService';

// Props
const props = defineProps({
  id: {
    type: String,
  },
});

const assignment = getOne(+props.id);
const company = findCompanyByAssignment(assignment);

// Legg utvikler til oppdrag
const addAssignment = async (id) => {
  console.log(id);
  console.log(assignment);
  await addAssignmentToDeveloper(id, assignment.value);
  await addDeveloperToAssignment(id, assignment.value);
};

// Fjern utvikler fra oppdrag
const removeAssignment = async (id) => {
  await removeDeveloperFromAssignment(id, assignment.value);
  await removeAssignmentFromDeveloper(id, assignment.value);
};
</script>
