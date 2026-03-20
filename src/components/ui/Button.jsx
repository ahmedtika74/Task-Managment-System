export default function Button({
  disabled,
  onClick,
  children,
  style = "",
  variant = "primary",
  size = "md",
  type = "button",
}) {
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600",
    danger:
      "bg-red-600 text-white hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600",
    ghost:
      "bg-transparent text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`flex cursor-pointer items-center justify-center rounded-lg font-medium transition-colors focus:outline-0 ${style} ${variants[variant]} ${sizes[size]}`}
    >
      {children}
    </button>
  );
}
