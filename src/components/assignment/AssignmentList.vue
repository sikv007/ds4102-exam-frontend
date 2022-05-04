<template>
  <AssignmentItem
    v-for="assignment in getAll"
    :key="assignment.id"
    :assignment="assignment"
  />
</template>

<script setup>
// Komponenter
import AssignmentItem from './AssignmentItem.vue';

// Service
import { getAll } from '../../services/assigmentService';
</script>
