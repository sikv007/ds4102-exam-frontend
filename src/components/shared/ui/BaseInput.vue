<template>
  <label for="lastName" class="form-label">Etternavn</label>
  <input class="form-control" type="text" id="lastName" placeholder="Nilsen" />
</template>

<script setup>
const props = defineProps(['modelValue']);
const emits = defineEmits(["update:mo"])
</script>
