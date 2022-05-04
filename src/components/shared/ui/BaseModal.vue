<template>
  <Teleport to="body">
    <Transition name="overlay" mode="out-in" @click="close">
      <div v-if="show" class="modal-overlay"></div>
    </Transition>
    <Transition
      name="modal"
      mode="out-in"
      @after-enter="addModalClass"
      @before-leave="removeModalClass"
    >
      <div
        v-if="show && form"
        class="modal modal--form"
        :class="{ ...modalClass, ...isDarkMode }"
      >
        <slot></slot>
      </div>
      <div
        v-else-if="show && confirm"
        class="modal modal--confirm"
        :class="{ ...modalClass, ...isDarkMode }"
      >
        <slot></slot>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
// Service
import { isDarkMode } from '../../../services/darkModeService';

import { ref } from '@vue/reactivity';
import { computed } from '@vue/runtime-core';
import { useRoute } from 'vue-router';

const route = useRoute();

const props = defineProps({
  show: {
    type: Boolean,
  },
  form: {
    type: Boolean,
  },
  confirm: {
    type: Boolean,
  },
});

const opened = ref(false);

const addModalClass = () => {
  opened.value = true;
};

const removeModalClass = () => {
  opened.value = false;
};

const modalClass = computed(() =>
  opened.value ? { 'modal-open': true } : { 'modal-open': false }
);

const emit = defineEmits(['close']);

const close = () => {
  emit('close');
};

// La bruker lukke modal vindu ved hjelp av Escape tast
window.addEventListener('keydown', (e) => {
  if (!props.show) return;
  if (e.key !== 'Escape') return;
  emit('close');
});
</script>
