<template>
  <div>
    <div><h4>{{ title }}</h4></div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
  },
});
</script>
