<template>
  <form class="p-5">
    <div class="container">
      <div class="row">
        <div class="col">
          <h4 class="fw-bold mb-4">{{ title }}</h4>
          <slot></slot>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
  },
});
</script>
