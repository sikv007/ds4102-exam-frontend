import { ref } from 'vue';

export const useValidate = (value, message, validation) => {
  const input = ref(value);
  const touched = ref(false);
  const errorMessage = message;
  const isValid = ref(validation(input.value));
  const error = !isValid.value && touched;

  const blurHandler = () => {
    touched.value = true;
  };

  return {
    input,
    touched,
    errorMessage,
    isValid,
    error,
    blurHandler
  };
};
