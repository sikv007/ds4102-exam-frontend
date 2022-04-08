<template>
  <div class="container py-5">
    <div class="row">
      <base-modal :show="modalVisible" @close="closeModal"><add-developer></add-developer></base-modal>
      <div class="col-12 p-4 d-flex justify-content-between align-items-center">
        <h1 class="fw-bold">Utviklere</h1>
        <base-button @click="toggleModal">Legg til utvikler</base-button>
      </div>
      <developers-list></developers-list>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import DevelopersList from "../components/developers/DevelopersList.vue";
import AddDeveloper from "../components/developers/AddDeveloper.vue"
const modalVisible = ref(false);
const toggleModal = () => (modalVisible.value = !modalVisible.value);
const closeModal = () => {
  modalVisible.value = false;
};
</script>
