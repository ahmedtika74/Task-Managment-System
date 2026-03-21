import { NavLink } from "react-router-dom";
import { LayoutDashboard, ListChecks } from "lucide-react";

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={onClose}
        ></div>
      )}
      <div
        className={`${isOpen ? "translate-x-0" : "-translate-x-full"} fixed inset-y-0 left-0 z-50 h-screen w-64 border-r bg-white transition-transform duration-300 ease-in-out md:relative md:translate-x-0 dark:border-gray-700 dark:bg-gray-800`}
      >
        <h2 className="p-6 text-center text-3xl font-bold">Task Flow</h2>
        <nav className="mt-8 flex flex-col gap-2 px-4">
          <NavLink
            onClick={onClose}
            to="/"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-2 rounded-lg bg-blue-50 px-4 py-3 text-blue-600 dark:bg-gray-700 dark:text-white"
                : "flex items-center gap-2 rounded-lg px-4 py-3 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
            }
          >
            <LayoutDashboard /> Dashboard
          </NavLink>
          <NavLink
            onClick={onClose}
            to="/tasks"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-2 rounded-lg bg-blue-50 px-4 py-3 text-blue-600 dark:bg-gray-700 dark:text-white"
                : "flex items-center gap-2 rounded-lg px-4 py-3 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
            }
          >
            <ListChecks /> Tasks
          </NavLink>
        </nav>
      </div>
    </>
  );
}
