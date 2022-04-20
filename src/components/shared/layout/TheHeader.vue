<template>
  <header class="mb-5">
    <div class="container-fluid py-4 px-5">
      <div class="d-flex justify-content-between align-items-center">
        <button @click="toggleNav" class="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <BaseLogo />
        <button @click="darkmode.setDarkMode">darkmode</button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useDarkModeService } from "../../../services/darkModeService";
const darkmode = useDarkModeService();
const emit = defineEmits(["toggle-nav"]);
const toggleNav = () => emit("toggle-nav");
</script>
