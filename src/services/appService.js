import { reactive } from 'vue';

export const error = reactive({
  value: false,
  message: '',
});

// Sett error melding hvis en error oppstår
export const setError = (val = false, message) => {
  error.value = val;
  error.message = message;
};
