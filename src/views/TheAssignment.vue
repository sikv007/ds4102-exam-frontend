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
      :show="modal.confirmModalVisible.value"
      confirm
      @close="modal.toggleConfirmModal"
      ><CompanyDelete :id="assignment.id" />
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
              <p>{{ assignments.price(assignment.price).value }}</p>
              <p class="mb-5">{{ company.contactEmail }}</p>
            </div>
            <div class="col">
              <BaseImage :src="company.image" :alt="company.name" />
            </div>
            <div class="row">
              <div class="col-12 position-relative">
                <h5 class="mb-2 fw-bold">Utviklere på dette oppdraget</h5>
                <DeveloperList
                  list
                  :data="
                    developers.getDevelopersFromAssignment(assignment.title)
                      .value
                  "
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
          <BaseButton cta @click="modal.toggleFormModal" title="Rediger" />
        </div>
        <BaseButton warning @click="modal.toggleConfirmModal" title="Slett" />
      </div>

      <div class="col-12 single p-5">
        <h5 class="mb-4 fw-bold">Ledige utviklere</h5>
        <DeveloperList
          :data="developers.getAvailableDevelopers.value"
          @event="addAssignment"
          button-text="Legg til i oppdrag"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { useCompanyService } from "../services/companyService";
import { useModalService } from "../services/modalService";
import DeveloperList from "../components/developer/DeveloperList.vue";
import AssignmentEdit from "../components/assignment/AssignmentEdit.vue";
import CompanyDelete from "../components/company/CompanyDelete.vue";
import { useAssignmentService } from "../services/assigmentService";
import { useDeveloperService } from "../services/developerService";
import { provide } from "@vue/runtime-core";
const developers = useDeveloperService();

const props = defineProps({
  id: {
    type: String,
  },
});

const assignments = useAssignmentService();
const companies = useCompanyService();
const assignment = assignments.getOne(+props.id);
const company = companies.findCompanyByAssignment(assignment);

const testEvent = (id) => {
  console.log(id);
};

const addAssignment = async (id) => {
  console.log(id);
  console.log(assignment);
  await developers.addAssignmentToDeveloper(id, assignment.value);
  await assignments.addDeveloperToAssignment(id, assignment.value);
};

const removeAssignment = async (id) => {
  await assignments.removeDeveloperFromAssignment(id, assignment.value);
  await developers.removeAssignmentFromDeveloper(id, assignment.value);
};

const modal = useModalService();
</script>
