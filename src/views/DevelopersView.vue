<template>
  <div>
    <h1>Utviklere</h1>
    <div>{{ developers.getAll }}</div>
  </div>
</template>

<script setup>
import { useDevelopersService } from "../services/developersService";
const developers = useDevelopersService();
</script>
