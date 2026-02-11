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
    description: 'Music learning and chord recognition platform.',
    url: 'https://chordify.net',
    tags: ['Music', 'EdTech'],
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
    url: 'https://juno.co',
  },
  {
    title: 'WeMix',
    description: 'Customer project—content and community platform.',
    url: 'https://wemix.com',
  },
  {
    title: 'Partner Utopia',
    description: 'Partner ecosystem and collaboration platform.',
    url: 'https://partnerutopia.com',
  },
  {
    title: 'In Peak',
    description: 'Customer project—performance and insights.',
    url: 'https://inpeak.com',
  },
  {
    title: 'Senioritis',
    description: 'Platform for seniors and life-stage transitions.',
    url: 'https://senioritis.com',
  },
];
