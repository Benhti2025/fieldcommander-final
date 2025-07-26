import { useState } from 'react';

export default function Home() {
  const [command, setCommand] = useState('');
  const [response, setResponse] = useState(null);

  async function sendCommand() {
    const res = await fetch('/api/send-command', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ command }),
    });
    const data = await res.json();
    setResponse(data.status);
  }

  return (
    <main style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h1>FieldCommander</h1>
      <input
        type="text"
        placeholder="Enter command..."
        value={command}
        onChange={(e) => setCommand(e.target.value)}
        style={{ padding: 10, width: '100%', marginBottom: 10 }}
      />
      <button onClick={sendCommand} style={{ padding: 10, width: '100%' }}>
        Send
      </button>
      {response && <p>Status: {response}</p>}
    </main>
  );
}
