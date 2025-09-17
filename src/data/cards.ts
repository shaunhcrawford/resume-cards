import type { CardContent } from '../types/Card';

export const cards: CardContent[] = [
  // Featured Projects
  {
    id: 'self-serve-onboarding',
    type: 'project',
    title: 'Self-Serve Onboarding Experience',
    subtitle: 'Top Hat User Activation',
    metrics: [
      '200% increase in core feature adoption',
      '75% lift in student enrollment'
    ],
    tools: ['SFMC', 'Copilot', 'Analytics'],
    description: 'Designed and launched a self-guided onboarding experience that empowered users to explore Top Hat independently, significantly improving key activation metrics.',
    links: [
      {
        url: '#',
        label: 'View Case Study'
      }
    ]
  },
  {
    id: 'growth-loop-framework',
    type: 'project',
    title: 'Growth Loop Framework',
    subtitle: 'User Acquisition Strategy',
    metrics: [
      '400% projected increase in new user signups YoY',
      'First comprehensive growth loop implementation'
    ],
    tools: ['PLG', 'Analytics', 'Experimentation'],
    description: 'Developed Top Hat\'s first growth loop framework, revolutionizing user discovery and signup processes through data-driven optimization.'
  },
  {
    id: 'ai-form-builder',
    type: 'project',
    title: 'AI Landing Page Form Builder',
    subtitle: 'Internal Tooling Innovation',
    metrics: [
      '90% reduction in turnaround time',
      'Streamlined testing process'
    ],
    tools: ['AI', 'Landing Pages', 'Automation'],
    description: 'Built internal AI tooling to accelerate landing page form development and testing, dramatically improving marketing team efficiency.'
  },
  
  // Key Skills
  {
    id: 'plg-expertise',
    type: 'skill',
    title: 'Product-Led Growth',
    subtitle: 'Strategy & Implementation',
    metrics: [
      'Cross-functional sprint leadership',
      'Funnel optimization expertise'
    ],
    tools: ['GA4', 'Looker', 'SQL'],
    description: 'Deep expertise in PLG strategies, focusing on user activation, retention, and growth through product-driven initiatives.'
  },
  {
    id: 'tech-stack',
    type: 'skill',
    title: 'Technical Marketing',
    subtitle: 'Tools & Technologies',
    tools: ['HTML/CSS/JS', 'SQL', 'Ampscript', 'SFMC', 'Copilot', 'Cursor'],
    description: 'Strong technical foundation enabling efficient execution of complex marketing automation and growth initiatives.'
  },
  {
    id: 'analytics',
    type: 'skill',
    title: 'Growth Analytics',
    subtitle: 'Data-Driven Decision Making',
    tools: ['GA4', 'Looker', 'SQL', 'Tag Manager'],
    description: 'Expert in analyzing user behavior and campaign performance to develop testable hypotheses and drive growth decisions.'
  },

  // Awards & Recognition
  {
    id: 'socrates-award',
    type: 'award',
    title: 'Socrates Award',
    subtitle: 'Top Hat FY2025',
    metrics: [
      'Cross-functional impact recognition',
      'Department MVP'
    ],
    description: 'Awarded for outstanding cross-functional impact and recognized as Department MVP for fiscal year 2025.'
  },
  
  // Education
  {
    id: 'university-education',
    type: 'award',
    title: 'Bachelor of Business Administration',
    subtitle: 'Trent University (2011-2015)',
    metrics: [
      'Graduated with Honours',
      'Specialized in Marketing & Consumer Culture'
    ],
    tools: ['Marketing Strategy', 'Consumer Behavior', 'Business Analytics'],
    description: 'Comprehensive business education with specialized focus on marketing and consumer culture, providing the analytical and strategic foundation for growth marketing excellence.'
  },

  // Key Tools
  {
    id: 'sfmc-github',
    type: 'tool',
    title: 'SFMC Automation Repository',
    subtitle: 'Developer Tooling',
    tools: ['Github', 'Copilot', 'Cursor', 'Ampscript'],
    description: 'Built and maintained a comprehensive Github repository for Salesforce Marketing Cloud automations, scripts, and personalization blocks.'
  },
  {
    id: 'automation-workflows',
    type: 'tool',
    title: 'Marketing Automation Suite',
    subtitle: 'Workflow Optimization',
    tools: ['SFMC', 'Zapier', 'HubSpot'],
    description: 'Developed internal automation workflows to streamline user follow-up and demo booking processes.'
  },

  // Key Roles
  {
    id: 'senior-growth-role',
    type: 'role',
    title: 'Senior Growth Marketing Manager',
    subtitle: 'Top Hat (July 2024 – Present)',
    metrics: [
      '200% increase in core feature adoption',
      '75% lift in student enrollment',
      '400% projected increase in new user signups YoY',
      '90% reduction in landing page turnaround time',
      'Socrates Award winner & Department MVP'
    ],
    tools: ['PLG', 'GA4', 'SFMC', 'Ampscript', 'Copilot', 'Cursor', 'Looker'],
    description: 'Partner with product, engineering, and lifecycle teams to identify and execute product-led initiatives. Own experimentation roadmap across high-impact touchpoints including landing pages, onboarding flows, and CTAs. Lead self-serve onboarding experience and growth loop framework development.'
  },
  {
    id: 'growth-marketing-role',
    type: 'role',
    title: 'Growth Marketing Manager',
    subtitle: 'Top Hat (June 2022 – July 2024)',
    metrics: [
      'Owned paid acquisition and early-funnel experimentation strategy',
      'Led demand generation across paid social, SEM, ABM, and remarketing',
      'Developed and tested new creative, audience strategies, and landing pages',
      'Built continuous feedback loop with sales and lifecycle teams',
      'MVP rollout of "Learn Top Hat" onboarding flow'
    ],
    tools: ['Salesforce', 'GA4', 'Looker', 'Tag Manager', 'SFMC', 'Zapier'],
    description: 'Owned paid acquisition and early-funnel experimentation strategy. Led demand generation across paid social, SEM, ABM, and remarketing. Designed and ran experiments to improve activation and onboarding, including MVP rollout of "Learn Top Hat" onboarding flow.'
  },
  {
    id: 'digital-marketing-agility',
    type: 'role',
    title: 'Digital Marketing Manager',
    subtitle: 'Agility PR Solutions (November 2020 – June 2022)',
    metrics: [
      'Managed all branded lead generation projects (webinars, guides, podcasts)',
      '4,000+ registrants across virtual summits in 2021',
      'Led cross-quarter virtual summit projects from concept to execution',
      'Managed team, speakers, vendors, and WordPress development',
      'Created mobile & desktop optimized event platform'
    ],
    tools: ['WordPress', 'HubSpot', 'Zapier'],
    description: 'Managed all branded lead generation projects including webinars, content guides, podcasts, virtual summits, and partnerships. Created and managed WordPress websites ensuring full functionality across mobile and desktop devices.'
  },
  {
    id: 'digital-marketing-dilawri-senior',
    type: 'role',
    title: 'Digital Marketing Manager',
    subtitle: 'S. Dilawri Automotive Group (May 2019 – June 2020)',
    metrics: [
      '21% increase in internet lead generation in 2019',
      '12% increase in sales from internet leads across all stores',
      'Created and segmented customer database for targeted campaigns',
      'Developed buyer personas for improved targeting',
      'Championed automated dynamic remarketing campaigns'
    ],
    tools: ['Facebook Ads', 'Google Ads', 'Analytics'],
    description: 'Managed and planned large-scale digital marketing campaigns. Reviewed, analyzed, and summarized campaign data to drive decisions. Created buyer personas and segmented customer database for large-scale email and digital advertising campaigns.'
  },
  {
    id: 'digital-marketing-dilawri-coordinator',
    type: 'role',
    title: 'Digital Marketing Coordinator',
    subtitle: 'S. Dilawri Automotive Group (March 2017 – March 2018, January 2019 - May 2019)',
    metrics: [
      '46% increase in Google Ads conversions within first year',
      'Managed large-scale campaigns across email, social, and search',
      'Optimized user experience through data analysis',
      'Continuous improvement of Google Ads strategies'
    ],
    tools: ['Google Ads', 'Facebook', 'YouTube', 'Google Analytics', 'CRM'],
    description: 'Planned, developed, and managed multiple large-scale digital marketing campaigns across email, Facebook, Google, and YouTube. Reviewed and analyzed user data to improve customer website experience.'
  },
  {
    id: 'offsets-coordinator',
    type: 'role',
    title: 'Offsets Coordinator',
    subtitle: 'DRS Technologies Canada Ltd. (January 2016 – April 2017)',
    metrics: [
      'Partnered with Business Development to market Canadian benefits',
      'Managed compliance with Government ITB policy',
      'Analyzed and implemented Offset activities',
      'Evaluated effectiveness of economic initiatives'
    ],
    tools: ['Business Development', 'Policy Analysis'],
    description: 'Partnered with Business Development department to market DRS benefits to Canadian economy. Analyzed, managed, and implemented DRS Offset activities for effectiveness and compliance with Government of Canada Industrial and Technological Benefits policy.'
  },
  {
    id: 'social-media-coordinator',
    type: 'role',
    title: 'Social Media Coordinator',
    subtitle: 'Sofie Andreou & Associates (September 2014 - December 2014)',
    metrics: [
      'Developed client-aligned digital marketing strategies',
      'Executed successful Facebook ad campaigns for entertainment clients',
      'Defined target markets and custom audience segments',
      'Created and optimized ad creative'
    ],
    tools: ['Facebook Ads', 'Social Media', 'Digital Strategy'],
    description: 'Developed, planned, and executed digital marketing strategies aligned with client goals. Ran Facebook advertising campaigns for entertainment clients including ad development, target market definition, and custom audience targeting.'
  }
];

// Featured cards for hero section
export const featuredCards = cards.filter(card => 
  ['self-serve-onboarding', 'growth-loop-framework', 'socrates-award'].includes(card.id)
);