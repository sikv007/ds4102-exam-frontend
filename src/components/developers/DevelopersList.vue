<template>
      <developers-item
        v-for="developer in developers.getAll.value"
        :key="developer.id"
        :developer="developer"
      ></developers-item>
</template>

<script setup>
import { useDevelopersService } from "../../services/developersService";
import DevelopersItem from "./DevelopersItem.vue";
const developers = useDevelopersService();
console.log(developers.getAll.value);
</script>
