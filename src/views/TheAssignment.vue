<template>
  <section v-if="assignment" class="container pt-2 pb-5">
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
      @close="modal.toggDeleteModal"
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
    <div class="row gap-4">
      <BaseBack to="/oppdrag" title="Oppdrag" />
      <div class="col single">
        <div class="container">
          <div class="row p-5">
            <div class="col">
              <h1 class="fw-bold mb-2 h2">
                {{ assignment.title }}
              </h1>
              <h4 class="mb-5">{{ assignment.company }}</h4>
              <p>{{ company.contactName }}</p>
              <p>{{ price(assignment.price).value }}</p>
              <p class="mb-5">{{ company.contactEmail }}</p>
            </div>
            <div class="col">
              <BaseImage :src="company.image" :alt="company.name" />
            </div>
            <div class="row">
              <div class="col-12 position-relative">
                <h5 class="mb-2 fw-bold">Utviklere på dette oppdraget</h5>
                <BaseAlert
                  v-if="
                    getDevelopersFromAssignment(assignment.id).value.length ===
                    0
                  "
                  message="Fant ingen utviklere knyttet til dette oppdraget"
                />
                <DeveloperList
                  list
                  :data="getDevelopersFromAssignment(assignment.id).value"
                  @event="removeAssignment"
                  button-text="Fjern fra oppdrag"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-lg-3 single p-5">
        <div class="col">
          <BaseButton
            class="w-100"
            cta
            @click="modal.toggleFormModal"
            title="Rediger"
          />
        </div>
        <div>
          <BaseButton
            class="w-100"
            warning
            @click="modal.toggleDeleteModal"
            title="Slett"
          />
        </div>
        <BaseButton
          class="w-100"
          warning
          @click="modal.toggleConfirmModal"
          title="Marker oppdrag som fullført"
        />
      </div>

      <div class="col-12 single p-5">
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
      </div>
    </div>
  </section>
</template>

<script setup>
// Komponenter
import DeveloperList from '../components/developer/DeveloperList.vue';
import AssignmentEdit from '../components/assignment/AssignmentEdit.vue';
import AssignmentDelete from '../components/assignment/AssignmentDelete.vue';
import AssignmentComplete from '../components/assignment/AssignmentComplete.vue';

// Services
import { useCompanyService } from '../services/companyService';
import * as modal from '../services/modalService';
import {
  getOne,
  addDeveloperToAssignment,
  removeDeveloperFromAssignment,
  price,
} from '../services/assigmentService';
import {
  addAssignmentToDeveloper,
  removeAssignmentFromDeveloper,
  getAvailableDevelopers,
  getDevelopersFromAssignment,
} from '../services/developerService';

const props = defineProps({
  id: {
    type: String,
  },
});

const companies = useCompanyService();
const assignment = getOne(+props.id);
const company = companies.findCompanyByAssignment(assignment);

const addAssignment = async (id) => {
  console.log(id);
  console.log(assignment);
  await addAssignmentToDeveloper(id, assignment.value);
  await addDeveloperToAssignment(id, assignment.value);
};

const removeAssignment = async (id) => {
  await removeDeveloperFromAssignment(id, assignment.value);
  await removeAssignmentFromDeveloper(id, assignment.value);
};
</script>
