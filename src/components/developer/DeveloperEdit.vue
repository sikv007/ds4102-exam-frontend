<template>
  <DeveloperForm
    title="Rediger utvikler"
    button="Lagre"
    @submit-form="submitForm"
    :id="id"
  ></DeveloperForm>
</template>

<script setup>
import { putDeveloper } from "../../services/developerService";
import DeveloperForm from "./DeveloperForm.vue";

const props = defineProps({
  id: Number
})

const submitForm = async (data, image) => {
  await putDeveloper(data, image);
};
</script>
