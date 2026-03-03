export interface Project {
  title: string;
  description: string;
  url: string;
  tags?: string[];
  image?: string;
}

export const projects: Project[] = [
  {
    title: 'Chordify',
    description: 'Engineering experts for SaaS & AI products. Scale your MVP to thousands of users; product development, team extension, fractional CTO.',
    url: 'https://chordify.com/',
    tags: ['SaaS', 'AI', 'Product Development'],
  },
  {
    title: 'AI Assistant.co',
    description:
      'Gen AI–powered business automation: AI assistants for phone, SMS, and web chat. Virtual receptionists, sales and customer support automation, 24/7 availability with natural-language, sub-2s response times.',
    url: 'https://aiassistant.co/',
    tags: ['AI', 'Voice', 'Automation'],
  },
  {
    title: 'Juno.Co',
    description: 'Customer project delivery and collaboration.',
    tags: ['SaaS', 'Product Development'],
    url: 'https://juno.co',
  },
  {
    title: 'WeMix Concrete',
    description: 'Customer project—content and community platform.',
    url: 'https://wemixconcrete.com',
    tags: ['SaaS', 'Product Development'],
  },
  {
    title: 'Partner Utopia',
    description: 'Partner ecosystem and collaboration platform.',
    url: 'https://partnerutopia.com',
    tags: ['SaaS', 'Product Development'],
  },
  {
    title: 'In Peak',
    description: 'Customer project—performance and insights.',
    url: 'https://inpeak.com',
    tags: ['SaaS', 'Product Development'],
  },
  {
    title: 'Senioritis',
    description: 'Platform for seniors and life-stage transitions.',
    url: 'https://senioritiscare.com',
    tags: ['SaaS', 'Product Development'],
  }
];
