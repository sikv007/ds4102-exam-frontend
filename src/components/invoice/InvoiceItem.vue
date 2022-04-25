<template>
  <BaseList>
    <div class="d-flex align-items-center gap-4">
      <h3 class="mb-0">{{ invoice.title }}</h3>
      <p class="mb-0">{{ invoice.company }}</p>
      <p class="mb-0">{{ daysDue(invoice).value }}</p>
      <div v-if="buttonsVisible">
        <BaseButton cta title="Knapp"></BaseButton>
        <BaseButton cta title="Knapp"></BaseButton>
        <BaseButton cta title="Knapp"></BaseButton>
      </div>
    </div>
  </BaseList>
</template>

<script setup>
import { onMounted, ref } from "@vue/runtime-core";
import { daysDue } from "../../services/invoiceService";

// const buttonsVisible = ref(false);

// onMounted(() => {
//   const screen = window.matchMedia("(min-width: 800px)");

//   if (screen.matches) buttonsVisible.value = true;
//   else buttonsVisible.value = false;

//   screen.addEventListener("change", (e) => {
//     if (e.matches) buttonsVisible.value = true;
//     else buttonsVisible.value = false;
//   });

// });

const props = defineProps({
  invoice: {
    type: Object,
  },
});
</script>
