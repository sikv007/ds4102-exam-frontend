<template>
  <AssignmentItem
    v-for="assignment in getAll"
    :key="assignment.id"
    :assignment="assignment"
  />
</template>

<script setup>
import { getAll } from "../../services/assigmentService";
import AssignmentItem from "./AssignmentItem.vue";
// const assignments = useAssignmentService();
</script>
