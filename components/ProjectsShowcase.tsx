import { projects } from '@/data/projects';

export default function ProjectsShowcase() {
  return (
    <section>
      <h2 className="font-inter-tight text-lg font-semibold text-gray-800 dark:text-gray-100 mb-6">
        Customer Projects Showcase
      </h2>
      <div className="space-y-1">
        {projects.map((p) => (
          <article
            key={p.url + p.title}
            className="relative p-5 rounded-xl odd:bg-gradient-to-tr odd:from-gray-100 odd:to-gray-50 dark:odd:bg-gradient-to-tr dark:odd:from-gray-800 dark:odd:to-gray-800/[0.65] group"
          >
            <div className="absolute top-5 right-7 text-gray-400 dark:text-gray-600 group-hover:text-gray-600 dark:group-hover:text-gray-400 group-hover:rotate-45 transition" aria-hidden>
              <svg className="fill-current opacity-80 dark:opacity-100" xmlns="http://www.w3.org/2000/svg" width="10" height="10">
                <path d="M1.018 10 0 8.983l7.572-7.575H1.723L1.736 0H10v8.266H8.577l.013-5.841L1.018 10Z" />
              </svg>
            </div>
            <div className="space-y-1.5 mb-2">
              <h3 className="font-semibold text-gray-800 dark:text-gray-100">
                <a className="before:absolute before:inset-0" href={p.url} target="_blank" rel="noopener noreferrer">
                  {p.title}
                </a>
              </h3>
              {p.tags && p.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-gray-200/80 dark:bg-gray-700/80 text-gray-600 dark:text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">{p.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
