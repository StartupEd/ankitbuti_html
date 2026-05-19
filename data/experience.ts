export interface Job {
  period: string;
  title: string;
  url: string;
  location: string;
  description: string;
  logo: string;
  logoAlt: string;
}

export const jobs: Job[] = [
  {
    period: 'January 2025 - Today',
    title: 'Founder, Startuped.AI',
    url: 'https://startuped.ai/',
    location: 'San Francisco, CA',
    logo: '/images/startuped.png',
    logoAlt: 'Startuped logo',
    description:
      `Founding and building Startuped.ai — an Always On AI Go-To-Market Agent Mesh that autonomously finds leads, engages buyers on social, and runs personalized outbound 24/7 for B2B teams.

• Architected a production multi-agent AI system from scratch: Lead Intelligence, Social Autopilot, Outbound Engine, and Signal Monitor running in closed-loop concert
• Shipping production LLM workflows with real-time buyer intent scoring, ICP enrichment, and hyper-personalized copy generation at scale
• Built closed-loop revenue intelligence: from market signal to booked meeting, fully automated — no human in the loop
• Technical co-founder: product, engineering, GTM, and fundraising`,
  },
  {
    period: 'April 2022 - January 2025',
    title: 'Head of Product & Engineering at WizAR Learning',
    url: 'https://wizar.io/',
    location: 'Vancouver, BC',
    logo: '/images/logo_ex_1.jpg',
    logoAlt: 'WizAR logo',
    description: `Led product and engineering for a global EdTech platform serving K-12 STEM learners across 20+ countries. Owned the full technical roadmap — from ML-driven personalization to AR game development to cloud infrastructure.

• Shipped ML/AI-powered personalized learning measurement: adaptive assessments that adjusted to each student's learning velocity in real time
• Built and launched Unity-based AR & virtual world experiences — immersive STEM games deployed on iOS/Android for 10K+ learners globally
• Architected hybrid On-Prem & Cloud Virtual School infrastructure to serve schools in low-bandwidth markets across Asia, Africa, and Latin America
• Owned LMS (web + mobile) end to end: user research, sprint delivery, and KPI ownership
• Managed cross-functional team of 12 across product, design, and engineering`,
  },
  {
    period: 'January 2024 - December 2024',
    title: 'Customer Advisor at Chordify, Inc.',
    url: 'https://chordify.com/',
    location: 'Sunnyvale, CA',
    logo: '/images/chordify.jpeg',
    logoAlt: 'Chordify logo',
    description: `Served as fractional Chief Customer Officer, embedding with Chordify's leadership to rebuild their enterprise GTM motion and professional services org.

• Deployed AI-powered marketing and sales automation — accelerated pipeline velocity and cut lead qualification time across enterprise segments
• Co-led Go-To-Market for three service lines: Idea-to-MVP (startups), Scale-Up (mid-market), and BOT/ODC (enterprise offshore delivery)
• Built and standardized the customer success playbook: onboarding frameworks, QBR cadences, escalation paths, and renewal strategy
• Drove measurable improvement in enterprise NPS and contract expansion rates through deep customer partnership`,
  },
  {
    period: 'September 2021 - April 2022',
    title: 'Entrepreneur In Residence at NEAR Protocol',
    url: 'https://near.org',
    location: 'Zug, Switzerland',
    logo: '/images/near_logo.jpg',
    logoAlt: 'NEAR Protocol logo',
    description: `Embedded as EIR at one of the top Layer-1 blockchain protocols during Web3's highest-velocity growth period. Owned product and GTM for NEAR's DAO infrastructure.

• Designed and scaled product development for Astro DAO and Sputnik V2 Smart Contract — NEAR's flagship on-chain governance primitives
• Launched the DAOcubator: a global incubator for 1st-generation DAO implementations spanning NFT projects, DeFi protocols, and dApps across 3 continents
• Delivered real-world DAO deployments with legal org structures, token engineering models, and business frameworks built from scratch
• Developed deep expertise in decentralized governance, token economics, and Web3 business model design`,
  },
  {
    period: 'March 2020 - September 2021',
    title: 'Business Owner, Buti Technologies',
    url: 'https://butitech.com/',
    location: 'San Francisco, CA',
    logo: '/images/buti_technologies_logo.jpeg',
    logoAlt: 'Buti Tech',
    description: `Founded and operated a boutique software studio delivering custom AI, cloud, and digital products for startups and mid-market businesses across North America.

• Led full-cycle delivery across 15+ client engagements: strategy, architecture, design, engineering, and launch
• Built production apps spanning mobile (iOS/Android), web, cloud infrastructure (AWS/GCP), and early AI/ML integrations
• Recruited and managed a distributed team of 8 engineers across North America and South Asia
• Converted 70%+ of initial projects into ongoing advisory or retainer relationships through deep customer partnership`,
  },
  {
    period: 'February 2018 - March 2020',
    title: 'Growth Engineering | Solutions Architect',
    url: 'https://workspan.com',
    location: 'Foster City, CA',
    logo: '/images/workspan_logo.webp',
    logoAlt: 'WorkSpan logo',
    description: `Early employee at WorkSpan — the pioneer in Partner Ecosystem Management (PEM) software — scaling the business from Series A through Series C alongside major enterprise customers including Microsoft, Cisco, and IBM.

• Owned Customer Engineering and Solutions Architecture: translating complex alliance and co-sell motions into product capabilities and implementation blueprints for Fortune 500 accounts
• Drove core product roadmap contributions from customer insights — surfaced UX requirements that shipped as features to all enterprise accounts
• Designed the N:N partner data model that became WorkSpan's proprietary schema for tracking joint pipeline, MDF, and co-sell revenue across partner ecosystems
• Built and standardized CRM integrations with Salesforce, HubSpot, and 10+ platforms — directly reducing customer implementation timelines
• Scaled with the company 100x: Series A → B → C, from early enterprise pilots to category-defining market leadership`,
  },
  {
    period: 'March 2016 - February 2018',
    title: 'Director of Technology Operations, Buti Properties & Constructions',
    url: 'https://butiproperties.com',
    location: 'New Delhi, India',
    logo: '/images/buti_properties_logo.jpg',
    logoAlt: 'Buti Properties',
    description: `Returned to lead technology transformation at a 50+ year-old family real estate and construction firm operating at $10M+ project scale in New Delhi.

• Designed and built proprietary construction accounting and project management software — tracking cash flows, milestones, and contractor schedules across 20 concurrent build sites
• Closed and managed multi-million dollar residential and commercial transactions with institutional and private capital partners
• Built the resilience and empathy muscle that informs every leadership role since: high-stakes, relationship-driven execution under real pressure`,
  },
  {
    period: 'December 2014 - March 2016',
    title: 'Software Engineer III, Juniper Networks - Pulse Secure',
    url: 'https://www.sdxcentral.com/news/juniper-sells-junos-pulse/',
    location: 'San Jose, CA',
    logo: '/images/pulsesecure.png',
    logoAlt: 'Pulse Secure',
    description: `Day-1 engineer at Juniper's Pulse Secure spinout — a PE-backed (Siris Capital) divestiture of Juniper's VPN and network access business into a standalone enterprise security company.

• Contributed to core networking and security protocols: IPv6, RSA, SAML SSO, NAT/NAC/UAC, RDP, SSL/TLS — foundational to Pulse's enterprise VPN and zero-trust product line
• Owned Mobile VPN & Android Workspaces engineering — a key differentiator in the enterprise BYOD market
• Built EMM (Enterprise Mobility Management) and MDM (Mobile Device Management) capabilities protecting corporate endpoints for Fortune 500 customers globally
• Lived a full PE divestiture lifecycle: standing up a new company, rebuilding team culture, and maintaining product continuity under tight timelines`,
  },
  {
    period: 'February 2013 - November 2014',
    title: 'Sr. Software Engineer, Qualcomm Inc.',
    url: 'https://qualcomm.com',
    location: 'San Diego, CA',
    logo: '/images/qualcomm.png',
    logoAlt: 'Qualcomm logo',
    description: `Software engineer in Qualcomm's Corporate Engineering group — building the Big Data and automated testing infrastructure that validated next-generation 4G LTE mobile chipsets, application processors, and modems at global manufacturing scale.

• Designed scalable test automation frameworks processing millions of device data points per run — enabling high-velocity chipset validation across Qualcomm's global device portfolio
• Built data pipelines and defect-pattern tooling in partnership with IBM to surface issues across modem, apps processor, and RF subsystems before production release
• Worked at the intersection of hardware and software on 4G LTE chipsets that shipped in hundreds of millions of consumer devices worldwide
• Developed deep expertise in cellular protocol stacks, embedded systems testing, and large-scale data pipeline engineering`,
  },
];
