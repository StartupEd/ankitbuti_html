'use client';

import Script from 'next/script';

const X_USERNAME = process.env.NEXT_PUBLIC_X_USERNAME || 'twitter';
const X_PROFILE_URL = `https://twitter.com/${X_USERNAME}`;

export default function XTimeline() {
  return (
    <section>
      <h2 className="font-inter-tight text-lg font-semibold text-gray-800 dark:text-gray-100 mb-6">
        Live from X
      </h2>
      <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm p-6">
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          Follow <strong className="text-gray-800 dark:text-gray-100">@{X_USERNAME}</strong> on X for updates and threads.
        </p>
        <a
          href={X_PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-4 py-2.5 text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          View profile on X
        </a>
        <div className="mt-4" id="x-follow-button-container">
          <a
            href={`https://twitter.com/intent/follow?screen_name=${X_USERNAME}&ref_src=twsrc%5Etfw`}
            className="twitter-follow-button"
            data-size="large"
            data-show-count="false"
          >
            Follow @{X_USERNAME}
          </a>
        </div>
      </div>
      <Script
        src="https://platform.twitter.com/widgets.js"
        strategy="lazyOnload"
      />
    </section>
  );
}
