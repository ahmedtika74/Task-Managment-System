export default function SortDropdown({ currentSort, onSortChange }) {
  return (
    <div>
      <label className="hidden md:block">Sort By: </label>
      <select
        value={currentSort}
        onChange={(e) => {
          onSortChange(e.target.value);
        }}
        name="sort"
        className="w-full cursor-pointer rounded-xl border border-gray-200 bg-white px-4 py-2 text-gray-700 transition-all focus:outline-0 sm:w-auto dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
      >
        <option value="date">Date</option>
        <option value="title">Title</option>
        <option value="priority">Priority</option>
      </select>
    </div>
  );
}
