import Link from 'next/link';

const SF_COVER_URL =
  'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1920&q=80';

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 relative bg-gray-900"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.55)), url(${SF_COVER_URL})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="text-center max-w-xl relative z-10">
        <h1 className="font-inter-tight text-3xl md:text-4xl font-bold text-white mb-3 drop-shadow-md">
          Ankit Buti
        </h1>
        <p className="text-gray-200 text-lg mb-10 drop-shadow-sm">
          Customer Engineering & AI SaaS Product Leader · San Francisco, CA
        </p>
        <Link
          href="/enter"
          className="inline-flex items-center justify-center rounded-xl bg-white text-gray-900 px-6 py-3 text-sm font-medium hover:bg-gray-100 transition shadow-lg"
        >
          Enter
        </Link>
      </div>
    </div>
  );
}
