import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-end md:justify-center relative bg-gray-950 overflow-hidden">

      {/* Background photo — animates independently so Ken Burns doesn't affect overlays */}
      <div
        className="absolute inset-0 hero-bg-photo"
        style={{
          backgroundImage: 'url(/images/ankit_buti.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: '60% 12%',
        }}
      />

      {/* Left→right: text side stays dark, photo bleeds through on right */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/75 to-transparent" />
      {/* Bottom lift */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/55 via-transparent to-transparent" />

      <div className="relative z-10 px-8 md:px-16 pb-16 md:pb-0 max-w-lg">
        <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-gray-500 mb-5">
          San Francisco, CA
        </p>

        <h1 className="font-inter-tight text-5xl md:text-6xl font-bold text-white mb-4 leading-none tracking-tight">
          Ankit<br />Buti
        </h1>

        <p className="text-gray-200 text-base font-medium mb-1 leading-snug">
          Customer Engineering &amp; AI Product Leader
        </p>

        <div className="flex items-center gap-2 mb-6">
          <span className="text-gray-500 text-sm">Founder &amp; CEO</span>
          <a
            href="https://startuped.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-300 hover:text-white transition-colors inline-flex items-center gap-1 group"
          >
            Startuped.ai
            <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed mb-2 max-w-sm">
          12+ years from software engineering to product and GTM leadership at scale.
          Now building an AI agent mesh that runs the entire go-to-market motion for your business.
        </p>

        <p className="text-gray-600 text-xs tracking-wide mb-10">
          Purdue Computer Science &nbsp;·&nbsp; Stanford Management
          <br />ex-Qualcomm · Juniper · WorkSpan · NEAR Protocol
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/enter"
            className="inline-flex items-center justify-center rounded-xl bg-white text-gray-900 px-6 py-3 text-sm font-semibold hover:bg-gray-100 transition shadow-lg"
          >
            View Full Profile
          </Link>
          <a
            href="https://startuped.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl border border-gray-700 text-gray-300 px-6 py-3 text-sm font-semibold hover:border-gray-500 hover:text-white transition"
          >
            Startuped.ai →
          </a>
        </div>
      </div>
    </div>
  );
}
