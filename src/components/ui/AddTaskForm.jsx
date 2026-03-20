import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../app/features/tasks/tasksSlice";
import Button from "./Button";

export default function AddTaskForm({ onClose }) {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    title: "",
    description: "",
    priority: "medium",
    category: "work",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.title == "") {
      alert("not valid");
      return null;
    }
    dispatch(addTask(data));
    onClose();
  };
  return (
    <form className="flex flex-col gap-4">
      <input
        value={data.title}
        onChange={(e) => {
          setData({ ...data, title: e.target.value });
        }}
        type="text"
        name="title"
        className="rounded-lg border p-2 dark:border-gray-600 dark:bg-gray-700"
      />
      <textarea
        value={data.description}
        onChange={(e) => {
          setData({ ...data, description: e.target.value });
        }}
        name="description"
        className="rounded-lg border p-2 dark:border-gray-600 dark:bg-gray-700"
      />
      <div className="flex gap-4">
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
      <Button type="submit" onClick={handleSubmit}>
        Save Task
      </Button>
    </form>
  );
}
