import { Minus, Plus, RotateCcw, Save } from "lucide-react";

export default function CounterControls({ onInc, onDec, onReset, onSave, saving, disabled }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
      <button
        onClick={onDec}
        disabled={disabled}
        className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-gray-700 shadow-sm ring-1 ring-gray-200 hover:bg-gray-50 disabled:opacity-50"
      >
        <Minus className="h-4 w-4" /> Decrease
      </button>
      <button
        onClick={onInc}
        disabled={disabled}
        className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-gray-700 shadow-sm ring-1 ring-gray-200 hover:bg-gray-50 disabled:opacity-50"
      >
        <Plus className="h-4 w-4" /> Increase
      </button>
      <button
        onClick={onReset}
        disabled={disabled}
        className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-gray-700 shadow-sm ring-1 ring-gray-200 hover:bg-gray-50 disabled:opacity-50"
      >
        <RotateCcw className="h-4 w-4" /> Reset
      </button>
      <button
        onClick={onSave}
        disabled={disabled || saving}
        className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white shadow-sm ring-1 ring-blue-600/20 hover:bg-blue-700 disabled:opacity-50"
      >
        <Save className="h-4 w-4" /> {saving ? "Saving…" : "Save"}
      </button>
    </div>
  );
}
