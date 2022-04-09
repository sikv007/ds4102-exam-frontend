<template>
      <developers-item
        v-for="developer in developers.getAll.value"
        :key="developer.id"
        :id="developer.id"
        :name="developer.name"
        :job-title="developer.jobTitle"
        :image="developer.image"
      ></developers-item>
</template>

<script setup>
import { useDevelopersService } from "../../services/developersService";
import DevelopersItem from "./DevelopersItem.vue";
const developers = useDevelopersService();
</script>
