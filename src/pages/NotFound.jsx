import { AlertTriangle } from "lucide-react";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-3 bg-gray-900">
      <AlertTriangle className="text-red-700" size={100} />
      <h1 className="text-4xl font-bold text-white">Page Not Found - 404</h1>
      <p className="text-xl text-gray-400">Oops! Looks like you're lost.</p>
      <Link to="/">
        <Button>Return to Dashboard</Button>
      </Link>
    </div>
  );
}
