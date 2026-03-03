'use client';

import Script from 'next/script';
import { useRef, useState, useEffect } from 'react';

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement | null;
        prefill: Record<string, unknown>;
        utm: Record<string, unknown>;
        styles: { height: string };
      }) => void;
    };
  }
}

export default function CalendlyEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [isProduction, setIsProduction] = useState(false);

  useEffect(() => {
    const isLocal =
      window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    setIsProduction(!isLocal);
  }, []);

  useEffect(() => {
    if (!scriptLoaded || !containerRef.current || !window.Calendly) return;
    window.Calendly.initInlineWidget({
      url: 'https://calendly.com/ankitbuti',
      parentElement: containerRef.current,
      prefill: {},
      utm: {},
      styles: { height: '150px' },
    });
  }, [scriptLoaded]);

  if (!isProduction) {
    return (
      <div
        id="calendly-embed"
        style={{ minHeight: '150px', width: '100%', overflow: 'hidden' }}
        className="flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 text-gray-500 dark:text-gray-400 text-sm"
      >
        Calendly embed (loaded in production only)
      </div>
    );
  }

  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        onLoad={() => setScriptLoaded(true)}
      />
      <div
        ref={containerRef}
        id="calendly-embed"
        style={{ minHeight: '150px', width: '100%', overflow: 'hidden' }}
      />
    </>
  );
}
