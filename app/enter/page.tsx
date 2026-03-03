'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function EnterPage() {
  const router = useRouter();
  const [key, setKey] = useState('');
  const [email, setEmail] = useState('');
  const [useEmail, setUseEmail] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    const body = useEmail ? { email: email.trim() } : { key: key.trim() };
    if (useEmail ? !email.trim() : !key.trim()) {
      setError(useEmail ? 'Enter your email.' : 'Enter your invitation key.');
      setLoading(false);
      return;
    }
    try {
      const res = await fetch('/api/access/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Invalid key or email.');
        setLoading(false);
        return;
      }
      router.push(data.redirect || '/profile');
      router.refresh();
    } catch {
      setError('Something went wrong. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-950 px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <h1 className="font-inter-tight text-xl font-semibold text-gray-900 dark:text-white mb-1">
            Enter invitation
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Use your invitation key or approved email to continue.
          </p>
        </div>
        <form onSubmit={onSubmit} className="space-y-4">
          {!useEmail ? (
            <div>
              <label htmlFor="key" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Invitation key
              </label>
              <input
                id="key"
                type="text"
                value={key}
                onChange={(e) => setKey(e.target.value)}
                className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-3 py-2 text-sm focus:ring-2 focus:ring-gray-400 focus:outline-none"
                placeholder="Enter your key"
                autoComplete="off"
                disabled={loading}
              />
            </div>
          ) : (
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-3 py-2 text-sm focus:ring-2 focus:ring-gray-400 focus:outline-none"
                placeholder="you@example.com"
                autoComplete="email"
                disabled={loading}
              />
            </div>
          )}
          {error && (
            <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-2.5 text-sm font-medium hover:opacity-90 disabled:opacity-70 transition"
          >
            {loading ? 'Checking…' : 'Continue'}
          </button>
        </form>
        <button
          type="button"
          onClick={() => { setUseEmail(!useEmail); setError(''); }}
          className="mt-4 w-full text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
        >
          {useEmail ? 'Use invitation key instead' : 'I have an approved email'}
        </button>
        <p className="mt-6 text-center">
          <Link href="/" className="text-sm text-gray-500 dark:text-gray-400 hover:underline">
            ← Back
          </Link>
        </p>
      </div>
    </div>
  );
}
