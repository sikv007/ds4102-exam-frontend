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
  if (props.icon === 'person') return { 'bi-person-fill': true };
  if (props.icon === 'moon') return { 'bi-moon-fill': true };
  if (props.icon === 'sun') return { 'bi-brightness-high-fill': true };
  if (props.icon === 'cancel') return { 'bi-x-lg': true };
  else return { '': true };
});
</script>
