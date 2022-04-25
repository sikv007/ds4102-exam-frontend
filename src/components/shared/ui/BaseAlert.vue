<template>
  <div class="alert" role="alert">
    <BaseIcon icon="alert" />
    {{ message }}
  </div>
</template>

<script setup>
const props = defineProps({
  message: {
    type: String,
  },
  warning: {
    type: Boolean,
  },
  success: {
    type: Boolean,
  },
});
</script>
