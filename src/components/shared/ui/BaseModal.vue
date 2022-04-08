<template>
  <teleport to="body">
    <transition name="overlay" mode="out-in" @click="close">
      <div v-if="show" class="modal-overlay"></div>
    </transition>
    <transition name="modal" mode="out-in" @after-enter="addModalClass" @before-leave="removeModalClass">
      <div v-if="show" class="modal p-5" :class="modalClass">
         <slot></slot>
      </div>
    </transition>
  </teleport>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  show: {
    type: Boolean,
  },
});

const opened = ref(false);

const addModalClass = () => {
  opened.value = true;
};

const removeModalClass = () => {
  opened.value = false;
  console.log(opened.value);
}

const modalClass = computed(() =>
  opened.value ? { "modal-open": true } : { "modal-open": false }
);

const emit = defineEmits(["close"]);

const close = () => {
  emit("close");
};
</script>
