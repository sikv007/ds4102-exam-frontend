<template>
      <developer-item
        v-for="developer in developers.getAll.value"
        :key="developer.id"
        :developer="developer"
      ></developer-item>
</template>

<script setup>
import { useDeveloperService } from "../../services/developerService";
import DeveloperItem from "./DeveloperItem.vue";
const developers = useDeveloperService();
console.log(developers.getAll.value);
</script>
