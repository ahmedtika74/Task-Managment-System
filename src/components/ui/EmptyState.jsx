import { ClipboardList } from "lucide-react";

export default function EmptyState({ title, description }) {
  return (
    <div className="flex flex-col items-center justify-center p-10 text-center dark:bg-gray-900">
      <ClipboardList size={64} className="dark:text-white" />
      <h3 className="mt-4 text-2xl font-bold dark:text-gray-100">{title}</h3>
      <p className="mt-2 text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
}
