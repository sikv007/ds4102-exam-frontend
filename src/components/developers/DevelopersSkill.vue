<template>
  <span class="skill py-1 px-4">{{ skill }}</span>
</template>

<script setup>

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  skill: {
    type: String,
  },
});

</script>
