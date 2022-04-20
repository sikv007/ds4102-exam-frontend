<template>
  <div class="wrapper" :class="darkmode.isDarkMode.value">
    <the-header @toggle-nav="toggleNav"></the-header>
    <the-navigation :show="menuVisible" @close="closeNav"></the-navigation>
    <main class="pb-5">
      <router-view v-slot="{ Component }">
        <transition name="route" mode="out-in">
          <component :is="Component" :key="$route.path"></component>
        </transition>
      </router-view>
    </main>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { defineAsyncComponent } from "@vue/runtime-core";
const TheNavigation = defineAsyncComponent(() =>
  import("./components/shared/layout/TheNavigation.vue")
);
import TheHeader from "./components/shared/layout/TheHeader.vue";
import { init } from "./helpers";
import { useDarkModeService } from "./services/darkModeService";
const darkmode = useDarkModeService();
const menuVisible = ref(false);
const toggleNav = () => (menuVisible.value = !menuVisible.value);
const closeNav = () => {
  menuVisible.value = false;
};
init();
</script>
