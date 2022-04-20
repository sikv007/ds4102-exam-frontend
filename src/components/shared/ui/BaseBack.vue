<template>
  <router-link class="h3 mb-3" :to="to">&larr; {{ title }} </router-link>
  <hr />
</template>

<script setup>
const props = defineProps({
  to: {
    type: String,
  },
  title: {
    type: String,
  },
});
</script>
