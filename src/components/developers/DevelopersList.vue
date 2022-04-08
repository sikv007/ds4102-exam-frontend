<template>
      <developers-item
        v-for="developer in developers.getAll.value"
        :key="developer.id"
        :id="developer.id"
        :name="developer.name"
      ></developers-item>
</template>

<script setup>
import { useDevelopersService } from "../../services/developersService";
import DevelopersItem from "./DevelopersItem.vue";
const developers = useDevelopersService();
</script>
