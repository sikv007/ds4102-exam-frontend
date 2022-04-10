<template>
  <div v-if="developer" class="container pt-2 pb-5">
    <base-modal
      :show="modal.formModalVisible.value"
      form
      @close="modal.toggleFormModal"
    >
      <edit-developer :id="developer.id"></edit-developer>
    </base-modal>
    <base-modal
      :show="modal.confirmModalVisible.value"
      confirm
      @close="modal.toggleConfirmModal"
      ><delete-developer :id="developer.id"></delete-developer
    ></base-modal>
    <div class="profile">
      <div class="container">
        <div class="row mb-4">
          <base-back to="/utviklere" title="Utviklere"></base-back>
          <hr />
        </div>
        <div class="row p-4">
          <div
            class="col-12 col-xs-12 col-md-12 col-lg-6 col-xl-4 d-flex justify-content-center"
          >
            <figure class="flex-shrink-0">
              <img :src="developer.image" alt="" />
            </figure>
          </div>
          <div class="col-12 col-lg-6">
            <div class="row">
              <div class="col d-flex mb-4">
                <developer-availability
                  :developer="developer"
                ></developer-availability>
              </div>
            </div>
            <h1 class="fw-bold mb-2 h2">
              {{ developers.fullName(developer) }}
            </h1>
            <h3 class="mb-4 h4">{{ developer.jobTitle }}</h3>
            <div class="d-flex gap-2 align-items-center">
              <i class="bi bi-envelope-fill"></i>
              <a :href="`mailto:${developer.email}`">{{ developer.email }}</a>
            </div>
            <div class="d-flex gap-2 align-items-center mb-5">
              <i class="bi bi-telephone-fill"></i>
              <a :href="`tel:${developer.phone}`">{{ developer.phone }}</a>
            </div>
            <div class="row">
              <h5 class="mb-4">Ferdigheter:</h5>
              <div class="col d-flex gap-3 mb-5 flex-wrap">
                <developers-skill
                  v-for="skill in developer.skills"
                  :key="skill"
                  :skill="skill"
                ></developers-skill>
              </div>
            </div>
            <div class="d-flex gap-4 mb-5">
              <base-button cta @click="modal.toggleFormModal"
                >Rediger</base-button
              ><base-button warning @click="modal.toggleConfirmModal"
                >Slett</base-button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import DevelopersSkill from "../components/developers/DevelopersSkill.vue";
import { useDevelopersService } from "../services/developersService";
import { useModalService } from "../services/modalService";
import EditDeveloper from "../components/developers/EditDeveloper.vue";
import { computed } from "@vue/runtime-core";
import DeveloperAvailability from "../components/developers/DeveloperAvailability.vue";
import DeleteDeveloper from "../components/developers/DeleteDeveloper.vue"

const props = defineProps({
  id: {
    type: String,
  },
});

const developers = useDevelopersService();
const developer = developers.getOne(+props.id);

const modal = useModalService();
</script>
