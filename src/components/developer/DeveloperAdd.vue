<template>
  <DeveloperForm
    title="Legg til utvikler"
    button="Legg til"
    @submit-form="submitForm"
  ></DeveloperForm>
</template>

<script setup>
import { useDeveloperService } from "../../services/developerService";
import { useRouter } from "vue-router";
import DeveloperForm from "./DeveloperForm.vue";
const developers = useDeveloperService();

const submitForm = async (data, image) => {
  await developers.postDeveloper(data, image);
};
</script>
