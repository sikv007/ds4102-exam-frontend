import { ref } from 'vue';

export const formModalVisible = ref(false);
export const deleteModalVisible = ref(false);
export const confirmModalVisible = ref(false);

export const toggleFormModal = () => {
  formModalVisible.value = !formModalVisible.value;
};

export const toggleConfirmModal = () => {
  confirmModalVisible.value = !confirmModalVisible.value;
};

export const toggleDeleteModal = () => {
  deleteModalVisible.value = !deleteModalVisible.value;
};
