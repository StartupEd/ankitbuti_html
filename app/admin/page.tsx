'use client';

import { useState, useEffect, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

type Invitation = { _id?: string; key: string; enabled: boolean; createdAt: string };
type ApprovedEmail = { _id?: string; email: string; createdAt: string };

async function api<T>(url: string, options?: RequestInit): Promise<T> {
  const res = await fetch(url, { credentials: 'include', ...options });
  if (res.status === 401) throw new Error('Unauthorized');
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export default function AdminPage() {
  const router = useRouter();
  const [authed, setAuthed] = useState<boolean | null>(null);
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [invitations, setInvitations] = useState<Invitation[]>([]);
  const [emails, setEmails] = useState<ApprovedEmail[]>([]);
  const [newKey, setNewKey] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const checkAuth = async () => {
    try {
      await api('/api/admin/invitations');
      setAuthed(true);
    } catch {
      setAuthed(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (!authed) return;
    Promise.all([
      api<{ invitations: Invitation[] }>('/api/admin/invitations'),
      api<{ emails: ApprovedEmail[] }>('/api/admin/emails'),
    ]).then(([a, b]) => {
      setInvitations(a.invitations);
      setEmails(b.emails);
    }).catch(() => setAuthed(false));
  }, [authed]);

  const onLogin = async (e: FormEvent) => {
    e.preventDefault();
    setLoginError('');
    setLoading(true);
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
        credentials: 'include',
      });
      const data = await res.json();
      if (!res.ok) {
        setLoginError(data.error || 'Invalid password.');
        setLoading(false);
        return;
      }
      setAuthed(true);
      router.refresh();
    } catch {
      setLoginError('Request failed.');
    }
    setLoading(false);
  };

  const onLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST', credentials: 'include' });
    setAuthed(false);
    setPassword('');
    router.refresh();
  };

  const addInvitation = async (e: FormEvent) => {
    e.preventDefault();
    if (!newKey.trim()) return;
    setLoading(true);
    try {
      const data = await api<{ invitation: Invitation }>('/api/admin/invitations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key: newKey.trim(), enabled: true }),
      });
      setInvitations((prev) => [data.invitation, ...prev]);
      setNewKey('');
    } finally {
      setLoading(false);
    }
  };

  const toggleInvitation = async (key: string, enabled: boolean) => {
    await api(`/api/admin/invitations/${encodeURIComponent(key)}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ enabled }),
    });
    setInvitations((prev) => prev.map((i) => (i.key === key ? { ...i, enabled } : i)));
  };

  const deleteInvitation = async (key: string) => {
    await api(`/api/admin/invitations/${encodeURIComponent(key)}`, { method: 'DELETE' });
    setInvitations((prev) => prev.filter((i) => i.key !== key));
  };

  const addEmail = async (e: FormEvent) => {
    e.preventDefault();
    if (!newEmail.trim() || !newEmail.includes('@')) return;
    setLoading(true);
    try {
      const data = await api<{ email: ApprovedEmail }>('/api/admin/emails', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: newEmail.trim() }),
      });
      setEmails((prev) => [data.email, ...prev]);
      setNewEmail('');
    } finally {
      setLoading(false);
    }
  };

  const deleteEmail = async (email: string) => {
    await api(`/api/admin/emails/${encodeURIComponent(email)}`, { method: 'DELETE' });
    setEmails((prev) => prev.filter((e) => e.email !== email));
  };

  if (authed === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950">
        <span className="text-gray-500">Loading…</span>
      </div>
    );
  }

  if (!authed) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-950 px-4">
        <div className="w-full max-w-xs">
          <h1 className="font-inter-tight text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
            Admin
          </h1>
          <form onSubmit={onLogin} className="space-y-3">
            <input
              type="text"
              name="username"
              autoComplete="username"
              tabIndex={-1}
              className="absolute opacity-0 pointer-events-none h-0 w-0"
              aria-hidden
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-3 py-2 text-sm focus:ring-2 focus:ring-gray-400 focus:outline-none"
              autoComplete="current-password"
              disabled={loading}
            />
            {loginError && <p className="text-sm text-red-600 dark:text-red-400">{loginError}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-2 text-sm font-medium disabled:opacity-70"
            >
              Sign in
            </button>
          </form>
          <p className="mt-6 text-center">
            <Link href="/" className="text-sm text-gray-500 dark:text-gray-400 hover:underline">
              ← Home
            </Link>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-inter-tight text-xl font-semibold text-gray-900 dark:text-white">
            Admin · Invitations &amp; Emails
          </h1>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-sm text-gray-500 dark:text-gray-400 hover:underline">
              Site
            </Link>
            <button
              type="button"
              onClick={onLogout}
              className="text-sm text-gray-500 dark:text-gray-400 hover:underline"
            >
              Log out
            </button>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="font-medium text-gray-800 dark:text-gray-200 mb-3">Invitation keys</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Users with a valid key can enter the profile. Toggle to enable/disable.
          </p>
          <form onSubmit={addInvitation} className="flex gap-2 mb-4">
            <input
              type="text"
              value={newKey}
              onChange={(e) => setNewKey(e.target.value)}
              placeholder="New key"
              className="flex-1 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-3 py-2 text-sm focus:ring-2 focus:ring-gray-400 focus:outline-none"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading || !newKey.trim()}
              className="rounded-lg bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900 px-4 py-2 text-sm font-medium disabled:opacity-70"
            >
              Add
            </button>
          </form>
          <ul className="space-y-2">
            {invitations.map((i) => (
              <li
                key={i.key}
                className="flex items-center justify-between rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm"
              >
                <span className="font-mono text-gray-800 dark:text-gray-200">{i.key}</span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => toggleInvitation(i.key, !i.enabled)}
                    className={`rounded px-2 py-1 text-xs font-medium ${i.enabled ? 'bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-200' : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'}`}
                  >
                    {i.enabled ? 'On' : 'Off'}
                  </button>
                  <button
                    type="button"
                    onClick={() => deleteInvitation(i.key)}
                    className="text-red-600 dark:text-red-400 hover:underline text-xs"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
            {invitations.length === 0 && (
              <li className="text-sm text-gray-500 dark:text-gray-400 py-2">No keys yet.</li>
            )}
          </ul>
        </section>

        <section>
          <h2 className="font-medium text-gray-800 dark:text-gray-200 mb-3">Approved emails</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Users with these emails can enter the profile (no key needed).
          </p>
          <form onSubmit={addEmail} className="flex gap-2 mb-4">
            <input
              type="email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              placeholder="email@example.com"
              className="flex-1 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-3 py-2 text-sm focus:ring-2 focus:ring-gray-400 focus:outline-none"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading || !newEmail.trim()}
              className="rounded-lg bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900 px-4 py-2 text-sm font-medium disabled:opacity-70"
            >
              Add
            </button>
          </form>
          <ul className="space-y-2">
            {emails.map((e) => (
              <li
                key={e.email}
                className="flex items-center justify-between rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm"
              >
                <span className="text-gray-800 dark:text-gray-200">{e.email}</span>
                <button
                  type="button"
                  onClick={() => deleteEmail(e.email)}
                  className="text-red-600 dark:text-red-400 hover:underline text-xs"
                >
                  Remove
                </button>
              </li>
            ))}
            {emails.length === 0 && (
              <li className="text-sm text-gray-500 dark:text-gray-400 py-2">No emails yet.</li>
            )}
          </ul>
        </section>
      </div>
    </div>
  );
}
