<template>
  <Teleport to="body">
    <Transition name="overlay" mode="out-in" @click="close">
      <div v-if="show" class="navigation-overlay"></div>
    </Transition>
    <Transition name="nav" mode="out-in">
      <nav class="navigation" :class="isDarkMode" v-if="show">
        <div class="container py-5 px-5">
          <BaseLogo class="pb-5" @click="close" />
          <ul class="nav flex-column h3">
            <li class="nav-item">
              <RouterLink to="/" class="nav-link px-0" @click="close"
                >Dashboard</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink to="/utviklere" class="nav-link px-0" @click="close"
                >Utviklere</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink to="/kunder" class="nav-link px-0" @click="close"
                >Kunder</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink to="/oppdrag" class="nav-link px-0" @click="close"
                >Oppdrag</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink to="/faktura" class="nav-link px-0" @click="close"
                >Faktura</RouterLink
              >
            </li>
          </ul>
          <hr />
        </div>
        <button class="close-nav" @click="close">
          <BaseIcon icon="cancel" />
        </button>
      </nav>
    </Transition>
  </Teleport>
</template>

<script setup>
// Service
import { isDarkMode } from '../../../services/darkModeService';

// Props
const props = defineProps({
  show: {
    type: Boolean,
  },
});

// Emits
const emit = defineEmits(['close']);

const close = () => emit('close');
</script>
