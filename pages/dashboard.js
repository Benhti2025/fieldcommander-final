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
      {/* ...rest of UI */}
    </main>
  );
}
