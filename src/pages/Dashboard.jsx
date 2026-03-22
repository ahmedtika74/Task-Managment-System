import { useSelector } from "react-redux";
import { CheckCircle, ListTodo, Hourglass } from "lucide-react";
import { useOutletContext } from "react-router-dom";
import TaskCard from "../components/ui/TaskCard";
import Button from "../components/ui/Button";
import EmptyState from "../components/ui/EmptyState";

export default function Dashboard() {
  const { handleAdd, handleEdit, handleDelete } = useOutletContext();
  const { tasks } = useSelector((state) => state.tasks);

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
          <Button size="sm" onClick={handleAdd}>
            Add Task
          </Button>
        </div>
        {recentTasks.length === 0 ? (
          <EmptyState
            title="No Tasks Found"
            description="Enjoy your free time or add a new task to get started!"
          />
        ) : (
          recentTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))
        )}
      </div>
    </div>
  );
}
