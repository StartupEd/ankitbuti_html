export interface Board {
  period: string;
  title: string;
  url: string;
  description: string;
  logo?: string;
  logoAlt?: string;
  icon?: React.ReactNode;
}

export const boards: Board[] = [
  {
    period: 'Present',
    title: 'Board Treasurer, Purdue College of Science Alumni Board',
    url: 'https://www.purdue.edu/science/Alumni/Science_Alumni_Board/science-alumni-board.html',
    description:
      "Contributing to the growth and development of Purdue's College of Science through financial oversight and strategic planning.",
    logo: '/images/purdue.jpeg',
    logoAlt: 'Purdue logo',
  },
  {
    period: 'Present',
    title: 'Head of Security Committee, Village In The Park Daly City, HOA',
    url: 'https://www.apartments.com/village-in-the-park-daly-city-ca/dx335kl/',
    description:
      'Leading security initiatives and improvements for the community, ensuring resident safety and property protection through strategic planning and implementation of security measures.',
  },
];
