<template>
  <DeveloperForm
    title="Rediger utvikler"
    button="Lagre"
    @submit-form="submitForm"
    :id="id"
  ></DeveloperForm>
</template>

<script setup>
import { useDeveloperService } from "../../services/developerService";
import DeveloperForm from "./DeveloperForm.vue";

const props = defineProps({
  id: Number
})
const developers = useDeveloperService();

const submitForm = async (data, image) => {
  await developers.putDeveloper(data, image);
};
</script>
