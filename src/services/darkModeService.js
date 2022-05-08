import { computed, ref } from 'vue';

export const darkMode = ref(true);

// Klasser for darkMode
export const isDarkMode = computed(() => {
  return darkMode.value ? { 'dark-mode': true } : { 'dark-mode': false };
});

// Sett darkMode
export const setDarkMode = () => {
  darkMode.value = !darkMode.value;
  console.log(isDarkMode.value);
};
