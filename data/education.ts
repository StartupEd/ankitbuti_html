export interface EduItem {
  title: string;
  url: string;
  image: string;
  alt: string;
}

export const education: EduItem[] = [
  {
    title: 'BS in Computer Science - 2012, Purdue University',
    url: 'https://purdue.edu',
    image: '/images/purdue.jpeg',
    alt: 'Purdue',
  },
  {
    title: 'Certificate in General Management - 2014, Stanford University',
    url: 'https://stanford.edu',
    image: '/images/stanford.png',
    alt: 'Stanford',
  },
];
