<template>
  <div v-if="developer" class="container pt-2 pb-5">
    <BaseModal
      :show="modal.formModalVisible.value"
      form
      @close="modal.toggleFormModal"
    >
      <DeveloperEdit :id="developer.id" />
    </BaseModal>
    <BaseModal
      :show="modal.confirmModalVisible.value"
      confirm
      @close="modal.toggleConfirmModal"
    >
      <DeveloperDelete :id="developer.id" />
    </BaseModal>
    <div class="profile">
      <div class="container">
        <div class="row mb-4">
          <BaseBack to="/utviklere" title="Utviklere" />
        </div>
        <div class="row p-4">
          <div
            class="col-12 col-xs-12 col-md-12 col-lg-6 col-xl-4 d-flex justify-content-center"
          >
            <BaseImage
              :src="developer.image"
              :alt="fullName(developer).value"
            />
          </div>
          <div class="col-12 col-lg-6">
            <div class="row">
              <div class="col d-flex mb-4">
                <DeveloperAvailability :developer="developer" />
              </div>
            </div>
            <DeveloperDetails :developer="developer" />
            <div class="row">
              <h5 class="mb-3">Ferdigheter:</h5>
              <div class="col d-flex gap-3 mb-5 flex-wrap">
                <DeveloperSkill
                  v-for="skill in developer.skills"
                  :key="skill"
                  :skill="skill"
                />
              </div>
            </div>
            <div class="d-flex gap-3 mb-5">
              <BaseButton cta @click="modal.toggleFormModal" title="Rediger" />
              <BaseButton
                warning
                @click="modal.toggleConfirmModal"
                title="Slett"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import DeveloperSkill from '../components/developer/DeveloperSkill.vue';
import DeveloperDetails from '../components/developer/DeveloperDetails.vue';
import { getOne, fullName} from '../services/developerService';
import * as modal from '../services/modalService';
import DeveloperEdit from '../components/developer/DeveloperEdit.vue';
import { computed } from '@vue/runtime-core';
import DeveloperAvailability from '../components/developer/DeveloperAvailability.vue';
import DeveloperDelete from '../components/developer/DeveloperDelete.vue';

const props = defineProps({
  id: {
    type: String,
  },
});

const developer = getOne(+props.id);
</script>
