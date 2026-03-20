import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask, updateTask } from "../../app/features/tasks/tasksSlice";
import Button from "./Button";

export default function AddTaskForm({ onClose, taskToEdit }) {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    id: taskToEdit?.id,
    title: taskToEdit?.title || "",
    description: taskToEdit?.description || "",
    priority: taskToEdit?.priority || "medium",
    category: taskToEdit?.category || "work",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.title.trim() === "") {
      alert("not valid");
      return;
    }

    if (taskToEdit) {
      dispatch(updateTask(data));
    } else {
      dispatch(addTask(data));
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
      <div className="flex items-center gap-4">
        <label>Priority:</label>
        <select
          value={data.priority}
          onChange={(e) => {
            setData({ ...data, priority: e.target.value });
          }}
          name="priority"
          className="rounded-lg border p-2 dark:border-gray-600 dark:bg-gray-700"
        >
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <label>Category</label>
        <select
          value={data.category}
          onChange={(e) => {
            setData({ ...data, category: e.target.value });
          }}
          name="category"
          className="rounded-lg border p-2 dark:border-gray-600 dark:bg-gray-700"
        >
          <option value="work">Work</option>
          <option value="study">Study</option>
          <option value="personal">Personal</option>
        </select>
      </div>
      <Button type="submit">{taskToEdit ? "Update Task" : "Save Task"}</Button>
    </form>
  );
}
