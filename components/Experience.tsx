import Image from 'next/image';
import { jobs } from '@/data/experience';

function JobDescription({ text }: { text: string }) {
  const [introPart, ...rest] = text.split('\n\n');
  const bullets = rest
    .join('\n')
    .split('\n')
    .filter((line) => line.trim().startsWith('•'))
    .map((line) => {
      const content = line.replace(/^•\s*/, '').trim();
      return content.endsWith('.') ? content : `${content}.`;
    });

  return (
    <div>
      <p className="text-[13px] leading-relaxed text-gray-500 dark:text-gray-400 mb-4">
        {introPart}
      </p>
      {bullets.length > 0 && (
        <ul className="space-y-2.5">
          {bullets.map((bullet, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-[13px] text-gray-500 dark:text-gray-400"
            >
              <span className="shrink-0 mt-[6px] w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600" aria-hidden />
              <span className="leading-relaxed">{bullet}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Experience() {
  return (
    <section className="animate-fade-in-up" style={{ animationDelay: '80ms' }}>
      <h2 className="section-title font-inter-tight text-lg font-semibold text-gray-800 dark:text-gray-100">
        Work Experience
      </h2>
      <div className="space-y-1">
        {jobs.map((job, index) => (
          <article
            key={job.url + job.period}
            className="experience-card animate-fade-in-up p-5 rounded-xl odd:bg-gradient-to-tr odd:from-gray-100 odd:to-gray-50 dark:odd:bg-gradient-to-tr dark:odd:from-gray-800 dark:odd:to-gray-800/[0.65]"
            style={{ animationDelay: `${120 + index * 60}ms` }}
          >
            <div className="sm:flex gap-5">
              <div className="group shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center bg-white dark:bg-gray-700/80 border border-gray-200/80 dark:border-gray-600/50 shadow-sm max-sm:mb-3 sm:mt-1 overflow-hidden p-1.5 transition-all duration-300 ease-out hover:scale-105 hover:shadow-md hover:border-gray-300 dark:hover:border-gray-500">
                <Image
                  src={job.logo}
                  width={56}
                  height={56}
                  alt={job.logoAlt}
                  className="w-full h-full object-contain transition-transform duration-300 ease-out group-hover:scale-110"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="space-y-1 mb-4">
                  <div className="text-[11px] font-medium tracking-wide uppercase text-gray-400 dark:text-gray-500">
                    {job.period}
                  </div>
                  <h3 className="font-inter-tight font-semibold text-[15px] text-gray-800 dark:text-gray-100 leading-snug">
                    <a
                      className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-150 decoration-2 decoration-gray-200 dark:decoration-gray-700 underline-offset-2 hover:underline"
                      href={job.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {job.title}
                    </a>
                  </h3>
                  <div className="text-[12px] font-medium text-gray-400 dark:text-gray-500 tracking-wide">
                    {job.location}
                  </div>
                </div>
                <JobDescription text={job.description} />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
