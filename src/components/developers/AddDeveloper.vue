<template>
  <developer-form
    title="Legg til utvikler"
    button="Legg til"
    @submit-form="submitForm"
  ></developer-form>
</template>

<script setup>
import { useDevelopersService } from "../../services/developersService";
import DeveloperForm from "./DeveloperForm.vue";
const developers = useDevelopersService();

const submitForm = async (data, image) => {
  await developers.postDeveloper(data, image);
};
</script>
