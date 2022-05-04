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
      :show="modal.deleteModalVisible.value"
      confirm
      @close="modal.toggleDeleteModal"
    >
      <DeveloperDelete :id="developer.id" />
    </BaseModal>

    <div class="row mb-4 px-4">
      <BaseBack to="/utviklere" title="Utviklere" />
    </div>

    <div class="row gap-4 px-4">
      <BaseSingle large>
        <div class="col-12 col-lg-4 mb-4">
          <BaseImage :src="developer.image" :alt="fullName(developer).value" />
        </div>
        <div class="col">
          <div class="d-flex pb-4">
            <DeveloperAvailability :developer="developer" />
          </div>
          <DeveloperDetails :developer="developer" />
          <h5 class="mb-4">Ferdigheter</h5>
          <div class="d-flex gap-3 flex-wrap">
            <DeveloperSkill
              v-for="skill in developer.skills"
              :key="skill"
              :skill="skill"
            />
          </div>
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
      </BaseSingle>
    </div>
  </div>
</template>

<script setup>
// Vue
import { computed } from 'vue';

// Komponenter
import DeveloperSkill from '../components/developer/DeveloperSkill.vue';
import DeveloperDetails from '../components/developer/DeveloperDetails.vue';
import DeveloperEdit from '../components/developer/DeveloperEdit.vue';
import DeveloperAvailability from '../components/developer/DeveloperAvailability.vue';
import DeveloperDelete from '../components/developer/DeveloperDelete.vue';

// Service
import { getOne, fullName } from '../services/developerService';
import * as modal from '../services/modalService';

// Props
const props = defineProps({
  id: {
    type: String,
  },
});

const developer = getOne(+props.id);
</script>
