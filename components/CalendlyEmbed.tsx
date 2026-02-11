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
