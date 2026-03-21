import { Menu } from "lucide-react";
import Button from "../ui/Button";
import useTheme from "../../hooks/useTheme";

export default function Header({ onClick }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <div className="flex items-center justify-between border-b px-6 py-3 dark:border-gray-700 dark:bg-gray-800">
        <div className="flex items-center justify-start">
          <button className="p-2 md:hidden" onClick={onClick}>
            <Menu size={24} />
          </button>
          <h2>Welcome Back, User!</h2>
        </div>
        <Button onClick={toggleTheme}>{theme === "dark" ? "🌙" : "☀️"}</Button>
      </div>
    </>
  );
}
