import { ref } from "vue";

const formModalVisible = ref(false);
const confirmModalVisible = ref(false);

const toggleFormModal = () => {
  formModalVisible.value = !formModalVisible.value;
};

const toggleConfirmModal = () => {
  confirmModalVisible.value = !confirmModalVisible.value;
};

export const useModalService = () => {
  return {
    formModalVisible,
    toggleFormModal,
    confirmModalVisible,
    toggleConfirmModal
  };
};
