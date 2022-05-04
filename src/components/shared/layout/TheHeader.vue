<template>
  <header class="header mb-5">
    <div class="container-fluid py-4 px-5">
      <div class="d-flex justify-content-between align-items-center">
        <button @click="toggleNav" class="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <BaseLogo />
        <BaseToggle @change="setDarkMode" />
      </div>
    </div>
  </header>
</template>

<script setup>
// Service
import { watch } from 'vue';
import { setDarkMode, darkMode } from '../../../services/darkModeService';

// Emits
const emit = defineEmits(['toggle-nav']);

const isDarkMode = JSON.parse(localStorage.getItem('dark-mode'));
if (isDarkMode) {
  darkMode.value = isDarkMode;
}

watch(darkMode, (darkMode) => {
  localStorage.setItem('dark-mode', darkMode);
});

// Vis/skjul navigasjon
const toggleNav = () => emit('toggle-nav');
</script>
