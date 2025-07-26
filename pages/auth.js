import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Auth() {
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    if (pin === '2468') {
      localStorage.setItem('fc_authed', 'true');
      router.push('/dashboard');
    } else {
      setError('❌ Incorrect PIN');
    }
  }

  return (
    <main style={{ padding: 20 }}>
      <h1>🔐 Enter Access PIN</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          placeholder="Enter 4-digit PIN"
          style={{ padding: 10, marginBottom: 10, width: '100%' }}
        />
        <button type="submit" style={{ padding: 10, width: '100%' }}>
          Unlock
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </main>
  );
}
