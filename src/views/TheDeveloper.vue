<template>
  <div v-if="developer" class="container pt-2 pb-5">
    <base-modal
      :show="modal.formModalVisible.value"
      form
      @close="modal.toggleFormModal"
    >
      <developer-edit :id="developer.id"></developer-edit>
    </base-modal>
    <base-modal
      :show="modal.confirmModalVisible.value"
      confirm
      @close="modal.toggleConfirmModal"
      ><developer-delete :id="developer.id"></developer-delete
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
            <base-image
              :src="developer.image"
              :alt="developers.fullName(developer)"
            ></base-image>
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
              <h5 class="mb-3">Ferdigheter:</h5>
              <div class="col d-flex gap-3 mb-5 flex-wrap">
                <developer-skill
                  v-for="skill in developer.skills"
                  :key="skill"
                  :skill="skill"
                ></developer-skill>
              </div>
            </div>
            <div class="d-flex gap-3 mb-5">
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
import DeveloperSkill from "../components/developer/DeveloperSkill.vue";
import { useDeveloperService } from "../services/developerService";
import { useModalService } from "../services/modalService";
import DeveloperEdit from "../components/developer/DeveloperEdit.vue";
import { computed } from "@vue/runtime-core";
import DeveloperAvailability from "../components/developer/DeveloperAvailability.vue";
import DeveloperDelete from "../components/developer/DeveloperDelete.vue";

const props = defineProps({
  id: {
    type: String,
  },
});

const developers = useDeveloperService();
const developer = developers.getOne(+props.id);

const modal = useModalService();
</script>
