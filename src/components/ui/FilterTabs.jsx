import Button from "./Button";

export default function FilterTabs({ currentFilter = "all", onFilterChange }) {
  return (
    <div className="flex items-center gap-1 rounded-xl bg-gray-100 p-1 dark:bg-gray-800">
      <Button
        size="sm"
        variant="ghost"
        onClick={() => {
          onFilterChange("all");
        }}
        className={
          currentFilter === "all"
            ? "bg-white text-blue-600 shadow-sm hover:text-gray-500 dark:bg-blue-500 dark:text-white"
            : "text-gray-500 hover:bg-gray-200 hover:text-blue-600 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-blue-400"
        }
      >
        All
      </Button>
      <Button
        size="sm"
        variant="ghost"
        onClick={() => {
          onFilterChange("pending");
        }}
        className={
          currentFilter === "pending"
            ? "bg-white text-blue-600 shadow-sm hover:text-gray-500 dark:bg-blue-500 dark:text-white"
            : "text-gray-500 hover:bg-gray-200 hover:text-blue-600 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-blue-400"
        }
      >
        Pending
      </Button>
      <Button
        size="sm"
        variant="ghost"
        onClick={() => {
          onFilterChange("done");
        }}
        className={
          currentFilter === "done"
            ? "bg-white text-blue-600 shadow-sm hover:text-gray-500 dark:bg-blue-500 dark:text-white"
            : "text-gray-500 hover:bg-gray-200 hover:text-blue-600 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-blue-400"
        }
      >
        Done
      </Button>
    </div>
  );
}
