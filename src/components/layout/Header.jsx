import Button from "@mui/material/Button";
import useTheme from "../../hooks/useTheme";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex h-16 items-center justify-between border-b px-6 dark:border-gray-700 dark:bg-gray-800">
      <h2>Welcome Back, User!</h2>
      <Button onClick={toggleTheme}>{theme === "dark" ? "🌙" : "☀️"}</Button>
    </div>
  );
}
