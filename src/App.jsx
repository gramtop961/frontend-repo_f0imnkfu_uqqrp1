import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import CounterDisplay from "./components/CounterDisplay";
import CounterControls from "./components/CounterControls";
import SaveStatus from "./components/SaveStatus";

const API_BASE = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000";

export default function App() {
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [lastSavedAt, setLastSavedAt] = useState(null);
  const [error, setError] = useState("");

  const canInteract = useMemo(() => !loading && !saving, [loading, saving]);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        setError("");
        setLoading(true);
        const res = await fetch(`${API_BASE}/counter`);
        if (!res.ok) throw new Error(`Failed to load (${res.status})`);
        const data = await res.json();
        if (!cancelled) setValue(Number(data.value ?? 0));
      } catch (e) {
        if (!cancelled) setError("Could not load the current value.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, []);

  async function save() {
    try {
      setError("");
      setSaving(true);
      const res = await fetch(`${API_BASE}/counter`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ value }),
      });
      if (!res.ok) throw new Error(`Failed to save (${res.status})`);
      const data = await res.json();
      setValue(Number(data.value ?? value));
      setLastSavedAt(Date.now());
    } catch (e) {
      setError("Could not save. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 flex items-center justify-center p-6">
      <div className="w-full max-w-xl rounded-2xl bg-white/70 backdrop-blur shadow-lg ring-1 ring-black/5 p-8">
        <Header />

        <CounterDisplay value={value} loading={loading} />

        <CounterControls
          onInc={() => setValue((v) => v + 1)}
          onDec={() => setValue((v) => v - 1)}
          onReset={() => setValue(0)}
          onSave={save}
          saving={saving}
          disabled={!canInteract}
        />

        <SaveStatus lastSavedAt={lastSavedAt} error={error} />
      </div>
    </div>
  );
}
