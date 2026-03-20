import { useState } from "react";
import { useSelector } from "react-redux";
import Button from "../components/ui/Button";
import TaskCard from "../components/ui/TaskCard";
import Modal from "../components/ui/Modal";
import AddTaskForm from "../components/ui/AddTaskForm";

export default function TasksPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
          tasks.map((task) => <TaskCard key={task.id} task={task} />)
        )}
      </div>
      <Modal
        isOpen={isModalOpen}
        title={"Add New Task"}
        onClose={() => {
          setIsModalOpen(false);
        }}
      >
        <AddTaskForm
          onClose={() => {
            setIsModalOpen(false);
          }}
        />
      </Modal>
    </div>
  );
}
