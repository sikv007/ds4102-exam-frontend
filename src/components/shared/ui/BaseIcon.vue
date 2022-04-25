<template>
  <i class="icon bi" :class="iconClass"></i>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  icon: {
    type: String,
  },
});

const iconClass = computed(() => {
  console.log(props.icon);
  if (props.icon === 'alert') return { 'bi-exclamation-circle': true };
  if (props.icon === 'mail')
    return {
      'bi-envelope-fill': true,
    };
  if (props.icon === 'phone')
    return {
      'bi-telephone-fill': true,
    };
  if (props.icon === 'calendar') return { 'bi-calendar-fill': true };
  else return { '': true };
});
</script>
