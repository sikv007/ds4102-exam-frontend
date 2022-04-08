<template>
  <the-header @toggle-nav="toggleNav"></the-header>
  <the-navigation :show="menuVisible" @close="closeNav"></the-navigation>
  <main>
    <div class="container">
      <router-view v-slot="{ Component }">
        <transition name="route" mode="out-in">
          <component :is="Component" :key="$route.path"></component>
        </transition>
      </router-view>
    </div>
  </main>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import TheNavigation from "./components/shared/layout/TheNavigation.vue";
import TheHeader from "./components/shared/layout/TheHeader.vue";
import { init } from "./helpers";
const menuVisible = ref(false);
const toggleNav = () => (menuVisible.value = !menuVisible.value);
const closeNav = () => {
  menuVisible.value = false;
};
init();
</script>
