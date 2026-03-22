import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteTask } from "../../app/features/tasks/tasksSlice";
import toast from "react-hot-toast";
import Sidebar from "./Sidebar";
import Header from "./Header";
import useTaskModals from "../../hooks/useTaskModal";
import Modal from "../ui/Modal";
import AddTaskForm from "../ui/AddTaskForm";
import ConfirmDialog from "../common/ConfirmDialog";

export default function MainLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const dispatch = useDispatch();
  const modals = useTaskModals();

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white">
      <div>
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
      </div>
      <div className="flex flex-1 flex-col">
        <Header onClick={() => setIsSidebarOpen(true)} />
        <main className="overflow-y-auto p-6">
          <Outlet context={modals} />
        </main>
      </div>
      <Modal
        isOpen={modals.isModalOpen}
        title={modals.taskToEdit ? "Edit Task" : "Add New Task"}
        onClose={modals.closeModal}
      >
        <AddTaskForm
          taskToEdit={modals.taskToEdit}
          onClose={modals.closeModal}
        />
      </Modal>

      <ConfirmDialog
        title="Delete Task"
        message={`Are you sure you want to delete "${modals.taskToDelete?.title}"?`}
        onClose={modals.closeConfirm}
        onConfirm={() => {
          dispatch(deleteTask(modals.taskToDelete));
          toast.success("Task deleted successfully!");
          modals.closeConfirm();
        }}
        isOpen={!!modals.taskToDelete}
      />
    </div>
  );
}
