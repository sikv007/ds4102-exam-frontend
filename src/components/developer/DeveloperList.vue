<template>
  <TransitionGroup name="list">
    <DeveloperItem
      v-for="developer in data"
      :key="developer.id"
      :list="list"
      :card="card"
      :developer="developer"
      @event="emitEvent"
      :button-text="buttonText"
    />
  </TransitionGroup>
</template>

<script setup>
// Komponenter
import DeveloperItem from './DeveloperItem.vue';

// Props
const props = defineProps({
  data: {
    type: Object,
  },
  card: {
    type: Boolean,
  },
  list: {
    type: Boolean,
  },
  buttonText: {
    type: String,
  },
});

// Emits
const emit = defineEmits(['event']);

// Emitter event fra knapp når komponenten vises som en liste
const emitEvent = (id) => {
  emit('event', id);
};
</script>
