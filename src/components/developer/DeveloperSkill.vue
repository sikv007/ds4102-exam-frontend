<template>
  <span class="skill py-1 px-3">{{ skill }}</span>
</template>

<script setup>
// Props
const props = defineProps({
  skill: {
    type: String,
  },
});
</script>
