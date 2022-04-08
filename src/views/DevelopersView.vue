<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-12 p-4 d-flex justify-content-between align-items-center">
        <h1 class="fw-bold">Utviklere</h1>
        <base-button>Legg til utvikler</base-button>
      </div>
    <developers-list></developers-list>
    </div>
  </div>
</template>

<script setup>
import DevelopersList from "../components/developers/DevelopersList.vue";
</script>
