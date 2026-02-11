const countries = [
  { flag: '🇺🇸', name: 'United States' },
  { flag: '🇨🇦', name: 'Canada' },
  { flag: '🇮🇳', name: 'India' },
  { flag: '🇸🇬', name: 'Singapore' },
  { flag: '🇹🇭', name: 'Thailand' },
  { flag: '🇵🇹', name: 'Portugal' },
  { flag: '🇪🇸', name: 'Spain' },
  { flag: '🇬🇧', name: 'United Kingdom' },
  { flag: '🇲🇽', name: 'Mexico' },
  { flag: '🇨🇴', name: 'Colombia' },
  { flag: '🇨🇼', name: 'Curacao' },
  { flag: '🇳🇱', name: 'Netherlands' },
  { flag: '🇫🇷', name: 'France' },
  { flag: '🇩🇪', name: 'Germany' },
  { flag: '🇭🇷', name: 'Croatia' },
  { flag: '🇯🇲', name: 'Jamaica' },
  { flag: '🇨🇷', name: 'Costa Rica' },
  { flag: '🇵🇦', name: 'Panama' },
  { flag: '🇭🇰', name: 'Hong Kong' },
  { flag: '🇦🇪', name: 'United Arab Emirates' },
  { flag: '🇲🇦', name: 'Morocco' },
  { flag: '🇹🇷', name: 'Turkey' },
  { flag: '🇮🇪', name: 'Ireland' },
  { flag: '🇲🇻', name: 'Maldives' },
];

function Row() {
  return (
    <>
      {countries.map((c) => (
        <span key={c.name} className="mx-4 text-2xl" title={c.name}>
          {c.flag}
        </span>
      ))}
    </>
  );
}

export default function Voyages() {
  return (
    <section className="overflow-hidden">
      <h2 className="font-inter-tight text-lg font-semibold text-gray-800 dark:text-gray-100 mb-6">
        Voyages
      </h2>
      <div className="relative flex overflow-x-hidden bg-gradient-to-tr from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-800/[0.65] rounded-xl p-4">
        <div
          className="animate-marquee whitespace-nowrap py-3"
          style={{ animation: 'marquee 30s linear infinite' }}
        >
          <Row />
        </div>
        <div
          className="absolute top-0 animate-marquee2 whitespace-nowrap py-3"
          style={{ animation: 'marquee2 30s linear infinite' }}
        >
          <Row />
        </div>
      </div>
    </section>
  );
}
