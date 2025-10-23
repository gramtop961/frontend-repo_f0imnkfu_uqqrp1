export default function SaveStatus({ lastSavedAt, error }) {
  return (
    <div className="mt-4 text-center min-h-[1.5rem]">
      {error ? (
        <p className="text-sm text-red-600">{error}</p>
      ) : lastSavedAt ? (
        <p className="text-sm text-gray-500">Saved at {new Date(lastSavedAt).toLocaleTimeString()}</p>
      ) : (
        <p className="text-sm text-gray-400">No changes saved yet</p>
      )}
    </div>
  );
}
