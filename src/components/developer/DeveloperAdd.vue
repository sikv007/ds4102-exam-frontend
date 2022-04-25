<template>
  <DeveloperForm
    title="Legg til utvikler"
    button="Legg til"
    @submit-form="submitForm"
  ></DeveloperForm>
</template>

<script setup>
import { postDeveloper } from "../../services/developerService";
import DeveloperForm from "./DeveloperForm.vue";

const submitForm = async (data, image) => {
  await postDeveloper(data, image);
};
</script>
