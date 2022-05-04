<template>
  <label class="toggle">
    <input type="checkbox" :checked="darkMode" />
    <span class="slider"><BaseIcon icon="moon" /></span>
  </label>
</template>

<script setup>
import { darkMode } from '../../../services/darkModeService';
</script>
