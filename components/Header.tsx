import Image from 'next/image';
import ThemeToggle from './ThemeToggle';

const linktreeIcon =
  'https://cdn.iconscout.com/icon/free/png-256/free-linktree-logo-icon-download-in-svg-png-gif-file-formats--social-brand-communication-company-pack-logos-icons-9631079.png?f=webp&w=256';

const focusAreas = [
  'AI Product',
  'Customer Engineering',
  'Revenue Intelligence',
  'Closed Loop GTM',
  'Enterprise GTM',
  'AI Agent Mesh',
  "Network Effects",
  "Data Engineering",
];

export default function Header() {
  return (
    <header className="text-center pt-6">
      <ThemeToggle />

      <div className="mb-8">
        {/* Avatar */}
        <Image
          className="inline-flex rounded-full shadow-lg mb-4 ring-2 ring-gray-100 dark:ring-gray-800"
          src="/images/ankit_buti.jpg"
          width={200}
          height={200}
          alt="Ankit Buti"
        />

        {/* Name & title */}
        <h1 className="font-inter-tight font-bold text-gray-800 dark:text-gray-100 text-2xl mb-0.5">
          Ankit Buti
        </h1>
        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
          Customer Engineering &amp; AI Product Leader
        </p>
        <p className="text-xs text-gray-400 dark:text-gray-600 mt-0.5">
          San Francisco, CA
        </p>

        {/* Currently building badge */}
        <div className="mt-3 mb-4">
          <a
            href="https://startuped.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/60 px-3 py-1 text-xs text-gray-600 dark:text-gray-400 hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Building · Startuped.ai
            <svg className="w-2.5 h-2.5 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        {/* Short bio */}
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-[260px] mx-auto mb-4">
          12+ years from software engineering to product &amp; GTM at scale. Now shipping an AI agent mesh that runs the entire go-to-market motion for businesses.
        </p>

        {/* Focus area chips */}
        <div className="flex flex-wrap justify-center gap-1.5 mb-5">
          {focusAreas.map((area) => (
            <span
              key={area}
              className="text-[11px] px-2.5 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 font-medium"
            >
              {area}
            </span>
          ))}
        </div>

        {/* Email */}
        <p className="mb-5">
          <a
            href="mailto:mail@ankitbuti.com"
            className="inline-flex items-center justify-center gap-2 text-base md:text-lg font-semibold text-gray-800 dark:text-gray-100 hover:text-gray-600 dark:hover:text-white transition-colors tracking-tight"
          >
            <svg className="w-5 h-5 shrink-0 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            mail@ankitbuti.com
          </a>
        </p>

        {/* CTA */}
        <a
          className="btn-sm text-gray-200 dark:text-gray-800 bg-gradient-to-r from-gray-800 to-gray-700 dark:from-gray-300 dark:to-gray-100 dark:hover:bg-gray-100 shadow relative before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white/.2)_50%,transparent_75%,transparent_100%)] dark:before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:[transition:background-position_0s_ease] hover:before:bg-[position:-100%_0,0_0] hover:before:duration-[1500ms]"
          href="https://calendly.com/ankitbuti"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book a Meeting
        </a>
      </div>

      {/* Social icons */}
      <ul className="inline-flex gap-4">
        <li>
          <a
            className="w-8 h-8 rounded-full flex items-center justify-center bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600/[0.65] shadow-sm text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
            href="https://linktr.ee/ankitbuti"
            aria-label="Linktree"
          >
            <Image src={linktreeIcon} width={24} height={24} alt="Linktree" className="w-6 h-6" />
          </a>
        </li>
        <li>
          <a
            className="w-8 h-8 rounded-full flex items-center justify-center bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600/[0.65] shadow-sm text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
            href="https://x.com/ankitbuti"
            aria-label="X"
          >
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="16" height="14">
              <path d="M16 14h-4.938L7.197 9.108 2.771 14H.316l5.736-6.342L0 0h5.063l3.496 4.476L12.601 0h2.454L9.697 5.932 16 14Zm-4.26-1.422h1.36L4.323 1.347H2.865l8.875 11.231Z" />
            </svg>
          </a>
        </li>
        <li>
          <a
            className="w-8 h-8 rounded-full flex items-center justify-center bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600/[0.65] shadow-sm text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
            href="https://github.com/ankitbuti"
            aria-label="GitHub"
          >
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
              <path d="M7.95 0C3.578 0 0 3.578 0 7.95c0 3.479 2.286 6.46 5.466 7.553.397.1.497-.199.497-.397v-1.392c-2.187.497-2.683-.994-2.683-.994-.398-.894-.895-1.192-.895-1.192-.696-.497.1-.497.1-.497.795.1 1.192.795 1.192.795.696 1.292 1.888.894 2.286.696.1-.497.298-.895.497-1.093-1.79-.2-3.578-.895-3.578-3.976 0-.894.298-1.59.795-2.087-.1-.198-.397-.993.1-2.086 0 0 .695-.2 2.186.795a6.408 6.408 0 0 1 1.987-.299c.696 0 1.392.1 1.988.299 1.49-.994 2.186-.796 2.186-.796.398 1.094.199 1.889.1 2.087.496.597.795 1.292.795 2.087 0 3.081-1.889 3.677-3.677 3.876.298.398.596.895.596 1.59v2.187c0 .198.1.496.596.397C13.714 14.41 16 11.43 16 7.95 15.9 3.578 12.323 0 7.95 0Z" />
            </svg>
          </a>
        </li>
        <li>
          <a
            className="w-8 h-8 rounded-full flex items-center justify-center bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600/[0.65] shadow-sm text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
            href="https://linkedin.com/in/ankitbuti"
            aria-label="LinkedIn"
          >
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30">
              <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z" />
            </svg>
          </a>
        </li>
      </ul>

      {/* Hero photo */}
      <br />
      <div className="group flex justify-center gap-4 mt-2">
        <Image
          className="rounded-xl even:rotate-2 odd:-rotate-2 group-hover:rotate-0 transition duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] shadow-lg"
          src="/images/ankit-1.jpg"
          width={300}
          height={300}
          alt="Ankit Buti"
          style={{ height: 'auto', width: 'auto', maxWidth: '100%' }}
        />
      </div>
    </header>
  );
}
