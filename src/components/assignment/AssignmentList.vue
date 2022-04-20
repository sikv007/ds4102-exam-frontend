<template>
  <AssignmentItem
    v-for="assignment in assignments.getAll.value"
    :key="assignment.id"
    :assignment="assignment"
  />
</template>

<script setup>
import { useAssignmentService } from "../../services/assigmentService";
import AssignmentItem from "./AssignmentItem.vue";
const assignments = useAssignmentService();
</script>
