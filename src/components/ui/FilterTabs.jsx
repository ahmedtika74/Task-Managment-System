import Button from "./Button";

export default function FilterTabs({ currentFilter = "all", onFilterChange }) {
  return (
    <div className="flex items-center gap-1 rounded-xl bg-gray-100 p-1 dark:bg-gray-800">
      <Button
        size="sm"
        onClick={() => {
          onFilterChange("all");
        }}
        style={
          currentFilter === "all"
            ? "bg-gray-700 dark:bg-gray-700 text-blue-600 dark:text-blue-400 hover:text-white"
            : "hover:bg-white hover:dark:bg-gray-700 hover:text-blue-600 hover:dark:text-blue-400"
        }
      >
        All
      </Button>
      <Button
        size="sm"
        onClick={() => {
          onFilterChange("pending");
        }}
        style={
          currentFilter === "pending"
            ? "bg-gray-700 dark:bg-gray-700 text-blue-600 dark:text-blue-400 hover:text-white"
            : "hover:bg-white hover:dark:bg-gray-700 hover:text-blue-600 hover:dark:text-blue-400"
        }
      >
        Pending
      </Button>
      <Button
        size="sm"
        onClick={() => {
          onFilterChange("done");
        }}
        style={
          currentFilter === "done"
            ? "bg-gray-700 dark:bg-gray-700 text-blue-600 dark:text-blue-400 hover:text-white"
            : "hover:bg-white hover:dark:bg-gray-700 hover:text-blue-600 hover:dark:text-blue-400"
        }
      >
        Done
      </Button>
    </div>
  );
}
