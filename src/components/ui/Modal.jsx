import Button from "./Button";

export default function Modal({ isOpen, onClose, title, children }) {
  if (isOpen === false) {
    return null;
  }
  return (
    <div>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
        <div className="flex w-full max-w-md flex-col rounded-xl bg-white p-6 shadow-xl dark:bg-gray-800">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {title}
            </h2>
            <Button variant="danger" onClick={onClose} size="sm">
              X
            </Button>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}
