import { useSelector, useDispatch } from "react-redux";
import { useOutletContext } from "react-router-dom";
import {
  setSearchQuery,
  setSortBy,
  setFilter,
} from "../app/features/tasks/tasksSlice";
import Button from "../components/ui/Button";
import TaskCard from "../components/ui/TaskCard";

import SearchBar from "../components/ui/SearchBar";
import SortDropdown from "../components/ui/SortDropdown";
import FilterTabs from "../components/ui/FilterTabs";
import EmptyState from "../components/ui/EmptyState";

export default function TasksPage() {
  const { handleAdd, handleEdit, handleDelete } = useOutletContext();
  const dispatch = useDispatch();
  const { tasks, filter, searchQuery, sortBy } = useSelector(
    (state) => state.tasks,
  );

  const filteredTasks = tasks
    .filter((task) =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    .filter((task) => {
      if (filter === "done") return task.isDone === true;
      if (filter === "pending") return task.isDone === false;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === "title") {
        return a.title.localeCompare(b.title);
      } else if (sortBy === "priority") {
        const prior = { high: 1, medium: 2, low: 3 };
        return prior[a.priority] - prior[b.priority];
      } else if (sortBy === "date") {
        return new Date(b.createdAt) - new Date(a.createdAt);
      }

      return 0;
    });
  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-bold">My Tasks</h2>
        <Button onClick={handleAdd}>Add New Task</Button>
      </div>
      {/* Search & Filter & Sort */}
      <div className="mb-6">
        <SearchBar
          value={searchQuery}
          onChange={(e) => {
            dispatch(setSearchQuery(e.target.value));
          }}
        />
        <div className="mt-6 flex items-center justify-between">
          <FilterTabs
            currentFilter={filter}
            onFilterChange={(value) => {
              dispatch(setFilter(value));
            }}
          />
          <SortDropdown
            currentSort={sortBy}
            onSortChange={(value) => dispatch(setSortBy(value))}
          />
        </div>
      </div>
      {/* Tasks */}
      <div className="grid grid-cols-1 gap-4">
        {tasks.length === 0 ? (
          <EmptyState
            title="No Tasks Found"
            description="Enjoy your free time or add a new task to get started!"
          />
        ) : filteredTasks.length === 0 ? (
          <EmptyState title="No matching tasks." />
        ) : (
          filteredTasks.map((task) => (
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
