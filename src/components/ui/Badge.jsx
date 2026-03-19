export default function Badge({ children, style, variant = "info" }) {
  const variants = {
    success:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    danger: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
    warning:
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    info: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200",
  };

  return (
    <span
      className={`text-xs font-medium py-0.5 px-2.5 rounded-full inline-block ${variants[variant]} ${style}`}
    >
      {children}
    </span>
  );
}
