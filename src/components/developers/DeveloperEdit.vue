<template>
  <developer-form
    title="Rediger utvikler"
    button="Lagre"
    @submit-form="submitForm"
    :id="id"
  ></developer-form>
</template>

<script setup>
import { useDeveloperService } from "../../services/developerService";
import DeveloperForm from "./DeveloperForm.vue";
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  id: Number
})
const developers = useDeveloperService();

const submitForm = async (data, image) => {
  await developers.putDeveloper(data, image);
};
</script>
