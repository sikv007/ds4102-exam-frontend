<template>
  <router-link
    class="col-12 col-lg-6 col-xl-4 mb-4"
    :to="to"
  >
    <article class="card p-4 d-flex gap-4 align-items-center">
      <slot></slot>
    </article>
  </router-link>
</template>

<script setup>
const props = defineProps({
  to: {
    type: String,
  },
});
</script>
