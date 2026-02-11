export interface SelfAuthoredBlog {
  title: string;
  url: string;
  excerpt: string;
  date?: string;
  site: string;
}

export const selfAuthoredBlogs: SelfAuthoredBlog[] = [
  {
    site: 'medium.com',
    title: 'Culture, Growth, & Momentum @ WorkSpan',
    url: 'https://medium.com/marketing-network/culture-growth-momentum-workspan-99c9c8c64131',
    excerpt:
      "I must say, I'm in total awe of our team and company. In my first 3 official working weeks at WorkSpan, I've seen extreme #growth all around me.",
    date: '2024',
  },
  // Add more of your own blog posts here
];
