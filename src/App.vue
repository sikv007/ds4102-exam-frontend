<template>
  <div>
    <h1>Hello!</h1>

    {{ devs.getAll }}
  </div>
</template>

<script setup>
import { useDevelopersService } from "./services/developersService";
const devs = useDevelopersService();
devs.fetchDevelopers();
</script>
