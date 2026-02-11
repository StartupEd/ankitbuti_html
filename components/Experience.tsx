import Image from 'next/image';
import { jobs } from '@/data/experience';

export default function Experience() {
  return (
    <section>
      <h2 className="font-inter-tight text-lg font-semibold text-gray-800 dark:text-gray-100 mb-6">
        Work Experience
      </h2>
      <div className="space-y-1">
        {jobs.map((job) => (
          <article
            key={job.url + job.period}
            className="p-5 rounded-xl odd:bg-gradient-to-tr odd:from-gray-100 odd:to-gray-50 dark:odd:bg-gradient-to-tr dark:odd:from-gray-800 dark:odd:to-gray-800/[0.65]"
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
              <div>
                <div className="space-y-1.5 mb-3">
                  <div className="text-[13px] italic text-gray-500/70">{job.period}</div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-100">
                    <a
                      className="hover:underline decoration-2 decoration-gray-300 dark:decoration-gray-600 underline-offset-2"
                      href={job.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {job.title}
                    </a>
                  </h3>
                  <div className="text-[13px] font-medium text-gray-600 dark:text-gray-400">
                    {job.location}
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 whitespace-pre-line">
                  {job.description}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
