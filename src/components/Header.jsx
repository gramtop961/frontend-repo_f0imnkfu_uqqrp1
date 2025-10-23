import { Rocket } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-center gap-3 mb-8">
      <div className="p-2 rounded-lg bg-blue-600/10 text-blue-600">
        <Rocket className="h-6 w-6" />
      </div>
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Persistent Counter</h1>
        <p className="text-sm text-gray-500">Increments that actually stick around</p>
      </div>
    </header>
  );
}
