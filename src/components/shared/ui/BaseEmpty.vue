<template>
  <div>
    <div><h3>{{ title }}</h3></div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
  },
});
</script>
