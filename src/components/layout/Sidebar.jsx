import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="h-screen w-64 border-r bg-white dark:border-gray-700 dark:bg-gray-800">
      <h2 className="p-6 text-center text-3xl font-bold">Task Flow</h2>
      <nav className="mt-8 flex flex-col gap-2 px-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "block rounded-lg bg-blue-50 px-4 py-3 text-blue-600 dark:bg-gray-700 dark:text-white"
              : "block rounded-lg px-4 py-3 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/tasks"
          className={({ isActive }) =>
            isActive
              ? "block rounded-lg bg-blue-50 px-4 py-3 text-blue-600 dark:bg-gray-700 dark:text-white"
              : "block rounded-lg px-4 py-3 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
          }
        >
          Tasks
        </NavLink>
      </nav>
    </div>
  );
}
