'use client';

const X_USERNAME = process.env.NEXT_PUBLIC_X_USERNAME || 'twitter';

export default function XTimeline() {
  const embedUrl = `https://platform.twitter.com/embed/Timeline.html?screen_name=${encodeURIComponent(X_USERNAME)}&chrome=noheader%20nofooter&theme=auto&height=500`;

  return (
    <section>
      <h2 className="font-inter-tight text-lg font-semibold text-gray-800 dark:text-gray-100 mb-6">
        Live from X
      </h2>
      <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm">
        <iframe
          title={`X timeline for @${X_USERNAME}`}
          src={embedUrl}
          className="w-full min-h-[500px] border-0"
          loading="lazy"
        />
      </div>
      <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
        Tweets by @{X_USERNAME}
      </p>
    </section>
  );
}
