import Link from 'next/link';
import { useState } from 'react';

export default function Dashboard() {
  const [message, setMessage] = useState(null);
  const mockCapsules = [
    { id: 'CAP-001', agent: 'Judith', status: '✅ Executed', timestamp: '2m ago' },
    { id: 'CAP-002', agent: 'SecureSigner', status: '⏳ Pending', timestamp: '12s ago' },
    { id: 'CAP-003', agent: 'SolidGrip', status: '🛑 Failed', timestamp: '5m ago' },
  ];

  async function triggerRedeploy() {
    setMessage('Triggering redeploy...');
    const res = await fetch('/api/redeploy', { method: 'POST' });
    const data = await res.json();
    if (res.ok) {
      setMessage(`✅ Redeploy initiated. Check Vercel dashboard.`);
    } else {
      setMessage(`❌ Error: ${data.error}`);
    }
  }

  return (
    <main style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h1>📊 FieldCommander Dashboard</h1>

      <p>Live system overview:</p>
      <ul>
        <li>🧠 Judith: <strong>Active</strong></li>
        <li>🔐 SecureSigner: <strong>Ready</strong></li>
        <li>🤖 SolidGrip: <strong>Responding</strong></li>
      </ul>

      <hr style={{ margin: '20px 0' }} />

      <h2>Recent Capsule Logs</h2>
      <ul>
        {mockCapsules.map((cap) => (
          <li key={cap.id}>
            <strong>{cap.id}</strong> – {cap.agent} – {cap.status} <em>({cap.timestamp})</em>
          </li>
        ))}
      </ul>

      <button onClick={triggerRedeploy} style={{ marginTop: 20, padding: 10, fontWeight: 'bold' }}>
        🔁 Trigger Vercel Redeploy
      </button>
      {message && <p style={{ marginTop: 10 }}>{message}</p>}

      <hr />
      <Link href=\"/\" style={{ color: 'blue', textDecoration: 'underline' }}>
        ← Back to FieldCommander
      </Link>
    </main>
  );
}

