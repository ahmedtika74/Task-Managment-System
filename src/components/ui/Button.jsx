export default function Button({
  onClick,
  children,
  className = "",
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
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    danger: "bg-red-600 text-white hover:bg-red-700",
    ghost: "bg-transparent text-gray-700 hover:bg-gray-100 dark:text-gray-300",
    check: "bg-green-600 text-white hover:bg-green-700",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex cursor-pointer items-center justify-center rounded-lg font-medium transition-all focus:outline-0 ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
}
