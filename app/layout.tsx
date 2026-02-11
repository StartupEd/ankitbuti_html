import type { Metadata } from 'next';
import './globals.css';
import { Inter, Inter_Tight } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-inter-tight',
});

export const metadata: Metadata = {
  title: 'Ankit Buti — Customer Engineering & AI SaaS Product Leader',
  description:
    'Ankit Buti — Customer Engineering & AI SaaS Product Leader based in San Francisco. Founder of Startuped.AI. Expertise in product, engineering, GTM, and AI-driven growth.',
  keywords:
    'Ankit Buti, Startuped, AI SaaS, Customer Engineering, Product Leader, GTM, AI, SaaS, Founder, San Francisco, Purdue, Boilermaker, Buti',
  authors: [{ name: 'Ankit Buti' }],
  openGraph: {
    type: 'website',
    title: 'Ankit Buti — Customer Engineering & AI SaaS Product Leader',
    description:
      "Founder of Startuped.AI. I build AI-native GTM systems that help businesses find, connect, and scale with customers.",
    url: 'https://ankitbuti.com/',
    images: ['https://ankitbuti.com/images/ankit-1.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ankit Buti — Customer Engineering & AI SaaS Product Leader',
    description:
      "Founder of Startuped.AI. I build AI-native GTM systems that help businesses find, connect, and scale with customers.",
    images: ['https://ankitbuti.com/images/ankit-1.jpg'],
  },
  robots: 'index, follow',
};

export const viewport = {
  themeColor: '#111827',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var stored = localStorage.getItem('dark-mode');
                if (stored === 'false' || !('dark-mode' in localStorage)) {
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${interTight.variable} font-inter antialiased bg-gray-50 text-gray-800 dark:bg-gray-950 dark:text-gray-100 tracking-tight`}
      >
        {children}
      </body>
    </html>
  );
}
