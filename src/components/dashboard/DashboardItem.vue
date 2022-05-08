<template>
  <RouterLink :to="to" class="col-12">
    <div class="card p-5">
      <span class="fw-bold mb-4">{{ title }}</span>
      <h2 class="fw-bold">{{ content }}</h2>
      <p class="h6">{{ link }} &rarr;</p>
    </div>
  </RouterLink>
</template>

<script setup>
// Props
const props = defineProps({
  title: {
    type: String,
  },
  content: {
    type: Object,
  },
  link: {
    type: String,
  },
  to: {
    type: String,
  },
});
</script>
