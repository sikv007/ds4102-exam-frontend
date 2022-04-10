<template>
  <developer-form
    title="Legg til utvikler"
    button="Legg til"
    @submit-form="submitForm"
  ></developer-form>
</template>

<script setup>
import { useDeveloperService } from "../../services/developerService";
import DeveloperForm from "./DeveloperForm.vue";
const developers = useDeveloperService();

const submitForm = async (data, image) => {
  await developers.postDeveloper(data, image);
};
</script>
