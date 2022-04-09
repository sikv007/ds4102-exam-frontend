import { ref } from "vue";

const modalVisible = ref(false);

const toggleModal = () => {
  modalVisible.value = !modalVisible.value;
};

export const useModalService = () => {
  return {
    modalVisible,
    toggleModal,
  };
};
