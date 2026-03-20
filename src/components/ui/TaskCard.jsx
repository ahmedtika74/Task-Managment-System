import Badge from "./Badge";
import Button from "./Button";
import { Check, Trash } from "lucide-react";

export default function TaskCard({ task }) {
  return (
    <div className="flex items-center justify-between rounded-xl p-4 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg dark:bg-gray-800">
      <div className="text-left">
        <h2
          className={`text-lg font-bold ${task.isDone ? "text-gray-400 line-through" : "text-black dark:text-white"}`}
        >
          {task.title}
        </h2>
        <p className="text-gray-400">{task.description}</p>
        <div className="mt-3 flex items-center gap-2">
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
      <div className="flex items-center gap-2">
        <Button size="sm">
          <Check />
        </Button>
        <Button size="sm" variant="danger">
          <Trash />
        </Button>
      </div>
    </div>
  );
}
