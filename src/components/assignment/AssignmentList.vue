<template>
  <TransitionGroup name="list">
    <AssignmentItem
      v-for="assignment in getAll"
      :key="assignment.id"
      :assignment="assignment"
    />
  </TransitionGroup>
</template>

<script setup>
// Komponenter
import AssignmentItem from './AssignmentItem.vue';

// Service
import { getAll } from '../../services/assigmentService';
</script>
