<template>
  <router-link class="h3 mb-5" :to="to">&larr; {{ title }} </router-link>
</template>

<script setup>
const props = defineProps({
  to: {
    type: String
  },
  title: {
    type: String
  }
})
</script>