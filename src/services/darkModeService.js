import { computed, ref } from "vue";

const darkMode = ref(false);

const isDarkMode = computed(() => {
  return darkMode.value ? { "dark-mode": true } : { "dark-mode": false };
});

const setDarkMode = () => {
  darkMode.value = !darkMode.value;
  console.log(darkMode.value);
  console.log(isDarkMode.value);
};

export const useDarkModeService = () => {
  return {
    isDarkMode,
    setDarkMode,
  };
};
