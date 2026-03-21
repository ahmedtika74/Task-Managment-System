import { Search } from "lucide-react";

export default function SearchBar({ value, onChange }) {
  return (
    <div className="flex w-full items-center justify-between rounded-xl border border-gray-200 bg-gray-100 px-5 dark:border-gray-700 dark:bg-gray-800">
      <Search size={20} className="text-gray-400" />
      <input
        value={value}
        onChange={onChange}
        type="text"
        placeholder="Search Tasks..."
        className="ml-3 w-full py-2 pr-4 focus:outline-0"
      />
    </div>
  );
}
