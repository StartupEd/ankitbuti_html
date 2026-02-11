'use client';

import { useState, FormEvent } from 'react';

export default function Chat() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [reply, setReply] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    setError('');
    setReply('');
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: query.trim() }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Something went wrong.');
        return;
      }
      setReply(data.reply || '');
      setQuery('');
    } catch {
      setError('Failed to get a response. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating chat button - bottom right, Intercom-style */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gray-800 dark:bg-gray-700 text-white shadow-lg hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-all hover:scale-105"
        aria-label={open ? 'Close chat' : 'Ask about Ankit'}
      >
        {open ? (
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>

      {/* Chat panel */}
      {open && (
        <div
          className="fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] max-w-[380px] rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl"
          role="dialog"
          aria-label="Ask about Ankit"
        >
          <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 px-4 py-3">
            <h3 className="font-inter-tight text-sm font-semibold text-gray-800 dark:text-gray-100">
              Ask about Ankit
            </h3>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-lg p-1.5 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
              aria-label="Close"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="p-4">
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
              Ask anything about Ankit&apos;s background, experience, or how to work with him. Powered by AI.
            </p>
            <form onSubmit={onSubmit}>
              <div className="flex gap-2">
                <input
                  className="flex-1 text-sm bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 border border-gray-200 dark:border-gray-600 rounded-lg px-3 py-2 focus:ring-2 ring-gray-300 dark:ring-gray-600 focus:outline-none"
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="e.g. What did Ankit do at Startuped?"
                  disabled={loading}
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-sm shrink-0 text-gray-200 dark:text-gray-800 bg-gray-800 dark:bg-gray-200 rounded-lg px-4 py-2 disabled:opacity-70 hover:bg-gray-700 dark:hover:bg-gray-300"
                >
                  {loading ? '…' : 'Ask'}
                </button>
              </div>
            </form>
            {error && <p className="mt-2 text-xs text-red-600 dark:text-red-400">{error}</p>}
            {reply && (
              <div className="mt-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-300">
                {reply}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
