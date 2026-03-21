import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteTask } from "../app/features/tasks/tasksSlice";
import { CheckCircle, ListTodo, Hourglass } from "lucide-react";
import TaskCard from "../components/ui/TaskCard";
import Button from "../components/ui/Button";
import AddTaskForm from "../components/ui/AddTaskForm";
import Modal from "../components/ui/Modal";
import ConfirmDialog from "../components/common/ConfirmDialog";

export default function Dashboard() {
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state.tasks);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.isDone === true).length;
  const pendingTasks = tasks.filter((task) => task.isDone === false).length;
  const recentTasks = tasks.slice(0, 3);

  return (
    <div className="w-full">
      <h2 className="mb-8 text-2xl font-bold">Dashboard Overview</h2>
      {/* Stats */}
      <div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 xl:grid-cols-3">
          <div className="flex items-center gap-5 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <ListTodo size={64} className="text-blue-600" />
            <div className="flex w-full flex-col gap-4 text-center">
              <span className="block font-bold">Total Tasks</span>
              <span className="block text-4xl font-bold">{totalTasks}</span>
            </div>
          </div>
          <div className="flex items-center gap-5 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <CheckCircle size={64} className="text-green-600" />
            <div className="flex w-full flex-col gap-4 text-center">
              <span className="block font-bold">Completed Tasks</span>
              <span className="block text-4xl font-bold">{completedTasks}</span>
            </div>
          </div>
          <div className="flex items-center gap-5 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <Hourglass size={64} className="text-orange-600" />
            <div className="flex w-full flex-col gap-4 text-center">
              <span className="block font-bold">Pending Tasks</span>
              <span className="block text-4xl font-bold">{pendingTasks}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Tasks */}
      <div className="mt-8 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">Recent Tasks</h2>
          <Link to="/tasks">
            <Button size="sm">Add Task</Button>
          </Link>
        </div>
        {recentTasks.length === 0 ? (
          <p className="py-8 text-center text-gray-500">
            No tasks yet. Start by adding one!
          </p>
        ) : (
          recentTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onDelete={() => {
                setTaskToDelete(task);
              }}
              onEdit={() => {
                setTaskToEdit(task);
                setIsModalOpen(true);
              }}
            />
          ))
        )}
      </div>

      {/* Modals */}
      <Modal
        isOpen={isModalOpen}
        title={taskToEdit ? "Edit Task" : "Add New Task"}
        onClose={() => {
          setIsModalOpen(false);
          setTaskToEdit(null);
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
