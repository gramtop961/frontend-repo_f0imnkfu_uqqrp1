export default function CounterDisplay({ value, loading }) {
  return (
    <div className="text-center">
      <div className="text-sm font-medium text-gray-500 mb-2">Current value</div>
      <div className="inline-flex items-center justify-center rounded-2xl bg-white shadow-inner px-8 py-6 ring-1 ring-gray-200 min-w-[8rem]">
        <span className="tabular-nums text-6xl font-bold tracking-tight text-gray-900">
          {loading ? "…" : value}
        </span>
      </div>
    </div>
  );
}
