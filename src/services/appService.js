import { reactive } from 'vue';

export const error = reactive({
  value: false,
  message: '',
});

export const setError = (val = false, message) => {
  error.value = val;
  error.message = message;
};
