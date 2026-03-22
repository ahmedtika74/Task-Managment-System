import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask, updateTask } from "../../app/features/tasks/tasksSlice";
import toast from "react-hot-toast";
import Button from "./Button";

export default function AddTaskForm({ onClose, taskToEdit }) {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    id: taskToEdit?.id,
    title: taskToEdit?.title || "",
    description: taskToEdit?.description || "",
    priority: taskToEdit?.priority || "medium",
    category: taskToEdit?.category || "work",
    dueDate: taskToEdit?.dueDate || "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.title.trim() === "") {
      toast.error("Please enter a task title");
      return;
    }

    if (taskToEdit) {
      dispatch(updateTask(data));
      toast.success("Task updated successfully!");
    } else {
      dispatch(addTask(data));
      toast.success("Task added successfully!");
    }

    onClose();
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        placeholder="Task Title"
        value={data.title}
        onChange={(e) => {
          setData({ ...data, title: e.target.value });
        }}
        type="text"
        name="title"
        className="rounded-lg border p-2 dark:border-gray-600 dark:bg-gray-700"
      />
      <textarea
        placeholder="Task Description"
        value={data.description}
        onChange={(e) => {
          setData({ ...data, description: e.target.value });
        }}
        name="description"
        className="rounded-lg border p-2 dark:border-gray-600 dark:bg-gray-700"
      />

      <div className="flex items-center justify-between">
        {/* Priority */}
        <select
          value={data.priority}
          onChange={(e) => {
            setData({ ...data, priority: e.target.value });
          }}
          name="priority"
          className="rounded-lg border p-0.5 py-2 text-sm md:p-2 md:text-base dark:border-gray-600 dark:bg-gray-700"
        >
          <optgroup label="Priority">
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </optgroup>
        </select>
        {/* Category */}
        <select
          value={data.category}
          onChange={(e) => {
            setData({ ...data, category: e.target.value });
          }}
          name="category"
          className="rounded-lg border p-0.5 py-2 text-sm md:p-2 md:text-base dark:border-gray-600 dark:bg-gray-700"
        >
          <optgroup label="category">
            <option value="work">Work</option>
            <option value="study">Study</option>
            <option value="personal">Personal</option>
          </optgroup>
        </select>
        {/* Due Date */}
        <input
          value={data.dueDate}
          onChange={(e) => {
            setData({ ...data, dueDate: e.target.value });
          }}
          type="date"
          className="rounded-lg border p-0.5 py-2 text-sm outline-0 md:p-2 md:text-base dark:border-gray-600 dark:bg-gray-700"
        />
      </div>
      <Button type="submit">{taskToEdit ? "Update Task" : "Save Task"}</Button>
    </form>
  );
}
