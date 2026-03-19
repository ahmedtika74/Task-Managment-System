import Button from "../ui/Button";
import Modal from "../ui/Modal";

export default function ConfirmDialog({
  title = "Confirm Action",
  onConfirm,
  onClose,
  isOpen,
  message,
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title}>
      <p className="text-left text-gray-300">{message}</p>
      <div className="mt-6 flex justify-end gap-3">
        <Button variant="ghost" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="danger" onClick={onConfirm}>
          Delete
        </Button>
      </div>
    </Modal>
  );
}
