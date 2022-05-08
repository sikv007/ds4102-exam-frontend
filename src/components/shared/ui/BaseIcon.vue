<template>
  <i class="icon bi" :class="iconClass"></i>
</template>

<script setup>
// Vue
import { computed } from 'vue';

// Props
const props = defineProps({
  icon: {
    type: String,
  },
});

// Forskjellige ikon klasser basert på props
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
  if (props.icon === 'calendar') return { 'bi-calendar': true };
  if (props.icon === 'person') return { 'bi-person-fill': true };
  if (props.icon === 'moon') return { 'bi-moon-fill': true };
  if (props.icon === 'sun') return { 'bi-brightness-high-fill': true };
  if (props.icon === 'cancel') return { 'bi-x-lg': true };
  if (props.icon === 'price') return { 'bi-tag-fill': true };
  else return { '': true };
});
</script>
