import { computed, ref } from 'vue';

export const darkMode = ref(false);

export const isDarkMode = computed(() => {
  return darkMode.value ? { 'dark-mode': true } : { 'dark-mode': false };
});

export const setDarkMode = () => {
  darkMode.value = !darkMode.value;
  console.log(isDarkMode.value);
};
