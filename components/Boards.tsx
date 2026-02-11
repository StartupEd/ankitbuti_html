import Image from 'next/image';
import { boards } from '@/data/boards';

export default function Boards() {
  return (
    <section>
      <h2 className="font-inter-tight text-lg font-semibold text-gray-800 dark:text-gray-100 mb-6">
        Boards
      </h2>
      <div className="space-y-1">
        {boards.map((board) => (
          <article
            key={board.url}
            className="p-5 rounded-xl odd:bg-gradient-to-tr odd:from-gray-100 odd:to-gray-50 dark:odd:bg-gradient-to-tr dark:odd:from-gray-800 dark:odd:to-gray-800/[0.65]"
          >
            <div className="sm:flex gap-5">
              <div className="group shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center bg-white dark:bg-gray-700/80 border border-gray-200/80 dark:border-gray-600/50 shadow-sm max-sm:mb-3 sm:mt-1 overflow-hidden p-1.5 transition-all duration-300 ease-out hover:scale-105 hover:shadow-md hover:border-gray-300 dark:hover:border-gray-500">
                {board.logo ? (
                  <Image
                    src={board.logo}
                    width={56}
                    height={56}
                    alt={board.logoAlt || ''}
                    className="w-full h-full object-contain transition-transform duration-300 ease-out group-hover:scale-110"
                  />
                ) : (
                  <svg
                    className="w-8 h-8 fill-current text-gray-600 dark:text-gray-400 transition-transform duration-300 ease-out group-hover:scale-110"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 3L1 9l11 6l11-6l-11-6zm0 18l-9-5V9l9 5l9-5v7l-9 5z" />
                  </svg>
                )}
              </div>
              <div>
                <div className="space-y-1.5 mb-3">
                  <div className="text-[13px] italic text-gray-500/70">{board.period}</div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-100">
                    <a
                      className="hover:underline decoration-2 decoration-gray-300 dark:decoration-gray-600 underline-offset-2"
                      href={board.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {board.title}
                    </a>
                  </h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{board.description}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
