import Link from 'next/link';

const logs = [
  { id: 'LOG-001', command: 'redeploy', agent: 'SecureSigner', status: '✅ Success', time: '2 min ago' },
  { id: 'LOG-002', command: 'issue', agent: 'Judith', status: '🛑 Failed', time: '5 min ago' },
];

export default function Logs() {
  return (
    <main style={{ padding: 20 }}>
      <h1>📜 Capsule & Command Logs</h1>
      <ul>
        {logs.map((log) => (
          <li key={log.id}>
            <strong>{log.id}</strong> – {log.command} – {log.agent} – {log.status} <em>({log.time})</em>
          </li>
        ))}
      </ul>
      <hr />
      <Link href="/dashboard">← Back to Dashboard</Link>
    </main>
  );
}
