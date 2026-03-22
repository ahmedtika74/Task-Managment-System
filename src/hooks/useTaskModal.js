import { useState } from "react";

export default function useTaskModals() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const handleAdd = () => {
    setTaskToEdit(null);
    setIsModalOpen(true);
  };

  const handleEdit = (task) => {
    setTaskToEdit(task);
    setIsModalOpen(true);
  };

  const handleDelete = (task) => {
    setTaskToDelete(task);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTaskToEdit(null);
  };

  const closeConfirm = () => {
    setTaskToDelete(null);
  };

  return {
    isModalOpen,
    taskToDelete,
    taskToEdit,
    handleAdd,
    handleEdit,
    handleDelete,
    closeModal,
    closeConfirm,
  };
}
