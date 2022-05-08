<template>
  <div class="wrapper" :class="isDarkMode">
    <TheHeader @toggle-nav="toggleNav" />
    <TheNavigation :show="menuVisible" @close="closeNav" />
    <main class="pb-5">
      <RouterView v-slot="{ Component }">
        <Transition name="route" mode="out-in">
          <Component :is="Component" :key="$route.path" />
        </Transition>
      </RouterView>
    </main>
  </div>
</template>

<script setup>
// Vue
import { ref } from 'vue';

// Komponenter
import TheNavigation from './components/shared/layout/TheNavigation.vue';
import TheHeader from './components/shared/layout/TheHeader.vue';

// Service
import { init } from './helpers';
import { isDarkMode } from './services/darkModeService';

const menuVisible = ref(false);

// Vis/Skjul Navigasjon
const toggleNav = () => (menuVisible.value = !menuVisible.value);

// Lukk navigasjon
const closeNav = () => {
  menuVisible.value = false;
};

init();
</script>
