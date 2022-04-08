<template>
  <header>
    <div class="container-fluid py-2 px-4">
      <h3 @click="toggleNav"><i class="bi bi-list"></i></h3>
    </div>
  </header>
</template>

<script setup>
const emit = defineEmits(["toggle-bav"]);
const toggleNav = () => emit("toggle-nav");
</script>
