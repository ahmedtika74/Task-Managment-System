import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../app/features/tasks/tasksSlice";
import Button from "../components/ui/Button";
import TaskCard from "../components/ui/TaskCard";
import Modal from "../components/ui/Modal";
import AddTaskForm from "../components/ui/AddTaskForm";
import ConfirmDialog from "../components/common/ConfirmDialog";

export default function TasksPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks) || [];
  return (
    <div className="w-full">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-bold">My Tasks</h2>
        <Button
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          Add New Task
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {tasks.length === 0 ? (
          <p className="py-8 text-center text-gray-500">
            No tasks yet. Start by adding one!
          </p>
        ) : (
          tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onDelete={(task) => setTaskToDelete(task)}
              onEdit={(task) => {
                setTaskToEdit(task);
                setIsModalOpen(true);
              }}
            />
          ))
        )}
      </div>
      <Modal
        isOpen={isModalOpen}
        title={taskToEdit ? "Edite Task" : "Add New Task"}
        onClose={() => {
          setIsModalOpen(false);
          setTaskToEdit(false);
        }}
      >
        <AddTaskForm
          taskToEdit={taskToEdit}
          onClose={() => {
            setIsModalOpen(false);
            setTaskToEdit(null);
          }}
        />
      </Modal>
      <ConfirmDialog
        title="Delete Task"
        message={`Are you sure you want to delete "${taskToDelete?.title}"?`}
        onClose={() => {
          setTaskToDelete(null);
        }}
        onConfirm={() => {
          dispatch(deleteTask(taskToDelete));
          setTaskToDelete(null);
        }}
        isOpen={!!taskToDelete}
      />
    </div>
  );
}
