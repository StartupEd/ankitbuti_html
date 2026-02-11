export default function Videos() {
  return (
    <section>
      <h2 className="font-inter-tight text-lg font-semibold text-gray-800 dark:text-gray-100 mb-6">
        Videos
      </h2>
      <div className="grid min-[580px]:grid-cols-1 gap-4 group">
        <article className="relative aspect-video rounded-xl shadow-lg overflow-hidden min-[580px]:odd:-rotate-2 min-[580px]:even:rotate-2 group-hover:rotate-0 transition duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)]">
          <div className="relative flex flex-col justify-end h-full w-full px-6 py-5">
            <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
              <video
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
                controls
                preload="metadata"
                poster="/images/ankit-1.jpg"
              >
                <source
                  src="https://storage.googleapis.com/startuped-next/public/landing-video-v4.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
