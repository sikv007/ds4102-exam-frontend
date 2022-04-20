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
import DeveloperItem from "./DeveloperItem.vue";

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

const emit = defineEmits(["event"]);

const emitEvent = (id) => {
  emit("event", id);
};
</script>
