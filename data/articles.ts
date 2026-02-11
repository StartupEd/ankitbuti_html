export interface Article {
  source: string;
  title: string;
  url: string;
  excerpt: string;
}

export const articles: Article[] = [
  {
    source: 'yourstory.com',
    title: "Ankit Buti's Startuped 'teaches' students the art of starting up.",
    url: 'https://news.google.com/rss/articles/CBMiW2h0dHBzOi8veW91cnN0b3J5LmNvbS8yMDE3LzA3L2Fua2l0LWJ1dGktc3RhcnR1cGVkLWVudHJlcHJlbmV1cmlhbC1zY2hvb2wtc3RhcnR1cC1pbmN1YmF0b3LSAQA?oc=5',
    excerpt:
      "Ankit recounts that throughout these pursuits, at the core, he remained a student of the subject 'entrepreneurship'.",
  },
  {
    source: 'purdue.edu',
    title: 'ENTR Alum Startup Focused on Entrepreneurship Education',
    url: 'https://www.purdue.edu/entr/entr-alum-startup-focused-on-entrepreneurship-education/',
    excerpt: 'Seven years ago Ankit Buti was introduced to entrepreneurship at Purdue.',
  },
  {
    source: 'indianstartupnews.com',
    title: 'How Startuped is Teaching Entrepreneurs the Art of Starting Up',
    url: 'https://indianstartupnews.com/stories/how-startuped-is-teaching-entrepreneurs-the-art-of-starting-up/',
    excerpt: 'Ninety percent of Indian startups fail during the first five years. Almost all of the reasons.',
  },
];
