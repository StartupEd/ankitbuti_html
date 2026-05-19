import Image from 'next/image';
import { education } from '@/data/education';

export default function Education() {
  return (
    <section className="animate-fade-in-up" style={{ animationDelay: '120ms' }}>
      <h2 className="section-title font-inter-tight text-lg font-semibold text-gray-800 dark:text-gray-100">
        Education
      </h2>
      <div className="grid min-[580px]:grid-cols-2 gap-4 group">
        {education.map((edu) => (
          <article
            key={edu.url}
            className="relative aspect-video rounded-xl shadow-lg overflow-hidden min-[580px]:odd:-rotate-2 min-[580px]:even:rotate-2 group-hover:rotate-0 transition duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)]"
          >
            <figure className="absolute inset-0 before:absolute before:inset-0 before:bg-gradient-to-t before:to-75% before:from-gray-950/50 before:to-transparent">
              <Image
                className="h-full w-full object-cover"
                src={edu.image}
                width={600}
                height={338}
                alt={edu.alt}
              />
            </figure>
            <div className="relative flex flex-col justify-end h-full w-full px-6 py-5">
              <h3 className="text-sm font-medium text-white">
                <a className="before:absolute before:inset-0" href={edu.url} target="_blank" rel="noopener noreferrer">
                  {edu.title}
                </a>
              </h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
