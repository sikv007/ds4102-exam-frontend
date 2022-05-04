<template>
  <h1 class="fw-bold mb-2 h2">
    {{ assignment.title }}
  </h1>
  <h3 class="mb-4">{{ assignment.company }}</h3>
  <div class="d-flex gap-2 align-items-center">
    <BaseIcon icon="person" />
    <strong class="mb-0">Kontaktperson:</strong>
    <p class="mb-0">{{ company.contactName }}</p>
  </div>
  <div class="d-flex gap-2 align-items-center">
    <BaseIcon icon="mail" />
    <strong class="mb-0">E-post:</strong>
    <p class="mb-0">{{ company.contactEmail }}</p>
  </div>
  <!-- <div class="d-flex gap-2 align-items-center">
    <BaseIcon icon="mail" />
    <strong class="mb-0">E-post:</strong>
    <a :href="`mailto:${developer.email}`">{{ developer.email }}</a>
  </div> -->
  <!-- <div class="d-flex gap-2 align-items-center mb-5">
    <BaseIcon icon="phone" />
    <strong class="mb-0">Mobil:</strong>
    <a :href="`tel:${developer.phone}`">{{ developer.phone }}</a>
  </div> -->
</template>

<script setup>
// Props
const props = defineProps({
  assignment: {
    type: Object,
  },
  company: {
    type: Object,
  },
});

console.log(props.assignment);
console.log(props.company);
</script>
