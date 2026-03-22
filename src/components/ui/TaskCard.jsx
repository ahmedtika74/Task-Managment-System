import { useDispatch } from "react-redux";
import { toggleTask } from "../../app/features/tasks/tasksSlice";
import { Check, PencilLine, Trash, Calendar } from "lucide-react";
import toast from "react-hot-toast";
import Badge from "./Badge";
import Button from "./Button";

export default function TaskCard({ task, onDelete, onEdit }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between gap-5 rounded-xl p-4 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg dark:bg-gray-800">
      <div className="text-left">
        <h2
          className={`text-lg font-bold ${task.isDone ? "text-gray-400 line-through" : "text-black dark:text-white"}`}
        >
          {task.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-500">{task.description}</p>
        <div className="mt-3 flex items-center gap-2">
          {task.dueDate && (
            <>
              <Calendar size={15} /> <Badge>{task.dueDate}</Badge>
            </>
          )}
          <Badge variant="info">{task.category}</Badge>
          <Badge
            variant={
              task.priority === "high"
                ? "danger"
                : task.priority === "medium"
                  ? "warning"
                  : "info"
            }
          >
            {task.priority}
          </Badge>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 md:flex-row">
        <Button
          size="sm"
          variant="check"
          onClick={() => {
            dispatch(toggleTask(task));
            toast.success(
              task.isDone ? "Task marked as pending!" : "Task completed!",
            );
          }}
        >
          <Check />
        </Button>
        <Button size="sm" onClick={() => onEdit(task)}>
          <PencilLine />
        </Button>
        <Button
          size="sm"
          variant="danger"
          onClick={() => {
            onDelete(task);
          }}
        >
          <Trash />
        </Button>
      </div>
    </div>
  );
}
