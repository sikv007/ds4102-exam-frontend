<template>
  <BaseCard v-if="card" :to="`/utviklere/${developer.id}`">
    <BaseImage :src="developer.image" :alt="fullName(developer).value" small />
    <div>
      <DeveloperAvailability :developer="developer" small />
      <h5 class="fw-bold mb-0">{{ fullName(developer).value }}</h5>
      <p>{{ developer.jobTitle }}</p>
      <p class="h6">Mer info &rarr;</p>
    </div>
  </BaseCard>
  <BaseList v-else>
    <router-link
      :to="`/utviklere/${developer.id}`"
      class="d-flex align-items-center gap-4"
    >
      <BaseImage
        class="mb-0"
        :src="developer.image"
        :alt="fullName(developer).value"
        preview
      />
      <div>
        <h6 class="fw-bold mb-0 d-flex align-items-center gap-2">
          {{ fullName(developer).value }}
          <DeveloperAvailability preview :developer="developer" />
        </h6>
        <p class="mb-0">{{ developer.jobTitle }}</p>
      </div>
    </router-link>
    <BaseButton
      class="ms-auto"
      cta
      small
      @click="emitEvent"
      :title="buttonText"
    />
  </BaseList>
</template>

<script setup>
// Service
import { fullName } from '../../services/developerService';
import DeveloperAvailability from './DeveloperAvailability.vue';

// Props
const props = defineProps({
  developer: {
    type: Object,
  },
  card: {
    type: Boolean,
  },
  event: {
    type: Function,
  },
  buttonText: {
    type: String,
  },
});

// Emits
const emit = defineEmits(['event']);

// Emitter event fra knapp når komponenten vises som en liste
const emitEvent = () => {
  emit('event', props.developer.id);
};
</script>
