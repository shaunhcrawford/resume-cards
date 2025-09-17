import OpenAI from 'openai';
// Initialize OpenAI
const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true // Note: In production, you might want to proxy these requests through a backend
});

// Firebase initialization removed temporarily

// Resume context to be used in the system message
const RESUME_CONTEXT = `
PROFESSIONAL SUMMARY
Growth-focused marketing leader with a track record of designing and executing high-impact PLG experiments, onboarding experiences, and funnel optimizations. Proven ability to lead cross-functional sprints with engineering, product, and design teams. Known for combining strategic insight with executional excellence to drive measurable business outcomes. Recognized for innovative thinking and collaborative leadership.

PROFESSIONAL EXPERIENCE

Senior Growth Marketing Manager, Top Hat, Remote
JULY 2024 – PRESENT
Partner with product, engineering, and lifecycle teams to identify and execute product-led initiatives that improve sign-up, onboarding, and activation rates. Own experimentation roadmap across high-impact touchpoints, including landing pages, onboarding flows, and CTAs. Analyze user behavior and funnel data to shape strategy and influence roadmap prioritization.

Key Projects & Results:
- Launched a self-serve onboarding experience that empowered users to explore Top Hat independently → 200% increase in core feature adoption, 75% lift in student enrollment.
- Developed Top Hat's first growth loop framework, enabling users to discover and signup for Top Hat significantly easier, this experiment is on track for a 400% increase in new user signups YoY. 
- Built Github repository for Salesforce Marketing Cloud automations, scripts, landing pages and personalization blocks using a combination of Github Copilot and Cursor. 
- Built internal AI tooling to help marketers ship and test landing page forms faster, reducing turnaround time by 90%.
- Led funnel testing initiatives to identify friction and iterate conversion hypotheses across user segments.
- Awarded Socrates Award for cross-functional impact and Department MVP for FY2025.

Growth Marketing Manager, Top Hat, Remote
JUNE 2022 – JULY 2024
- Owned paid acquisition and early-funnel experimentation strategy, with a focus on accelerating user growth and improving conversion through collaborative, data-informed initiatives.
- Led demand generation efforts across paid social, SEM, ABM, and remarketing, developing and testing new creative, audience strategies, and landing pages.
- Partnered with sales and lifecycle teams to build a continuous feedback loop, using insights to inform messaging, positioning, and funnel design.
- Analyzed user behavior and campaign performance using Salesforce, GA4, Looker, and Tag Manager to develop testable hypotheses across the funnel.
- Designed and ran experiments to improve activation and onboarding, including the MVP rollout of a new onboarding flow that ultimately became "Learn Top Hat."
- Managed cross-functional project delivery with product, design, and engineering to rapidly validate growth hypotheses.
- Developed internal automation workflows (Salesforce Marketing Cloud, Zapier) to reduce friction in user follow-up and demo booking flows.

Digital Marketing Manager, Agility PR Solutions, Ottawa, Ontario
NOVEMBER 2020 – JUNE 2022
- Managed all branded lead generation projects, including webinars, content guides, podcasts, virtual summits, and partnerships.
- Managed WordPress websites, ensuring websites are fully functional and easy to use on mobile and desktop devices.
- Worked cross-functionally with other departments on lead generation and nurturing initiatives. 
- Created and implemented HubSpot and Zapier workflows to automate tasks.
Key Projects Include: 
- Created and managed two virtual summits, bringing in over 4,000 registrants in 2021. Each virtual summit project spanned across two quarters, involved management of a team, all speakers, vendors, and developed a WordPress website that's functional on desktop and mobile for all registrants to access the virtual summit. 

Digital Marketing Manager, S. Dilawri Automotive Group, Ottawa, Ontario
MAY 2019 – JUNE 2020
- Managed and planned large-scale digital marketing campaigns to be executed by the digital marketing team. 
- Reviewed, analyzed, and summarized campaign data to drive decisions on future marketing efforts. 
- Created buyer personas and segmented customer database accordingly to develop large-scale email and digital advertising campaigns. 
- Championed the creation of automated dynamic remarketing campaigns on both Facebook and Google Ads. 
Achievements: 
- Increased internet lead generation by 21% in 2019 by optimizing existing campaigns and developing new strategies for digital campaigns with new placements and targeting. This translated into a 12% increase in sales from internet leads for 2019 across all stores. 

Digital Marketing Coordinator, S. Dilawri Automotive Group, Ottawa, Ontario
MARCH 2017 – MARCH 2018, JANUARY 2019 - MAY 2019
- Planned, developed, and managed multiple large-scale digital marketing campaigns across email, Facebook, Google, and YouTube.
- Reviewed and analyzed user data in internal CRM and Google Analytics to improve the customer experience on the website. 
Achievements: 
- Increased Google Ads conversions by 46% within my first year and continued improving and testing strategies in our Google Ads account.  

Offsets Coordinator, DRS Technologies Canada Ltd., Ottawa, Ontario
JANUARY 2016 – APRIL 2017
- Partnered with the Business Development department to market DRS's benefits to the Canadian economy to leverage new business. 
- Analyzed, managed, and implemented the efforts of DRS's Offset activities for their effectiveness and compliance with the Government of Canada's Industrial and Technological Benefits policy. 

Social Media Coordinator, Sofie Andreou & Associates, Peterborough, Ontario
SEPTEMBER 2014 - DECEMBER 2014
- Developed, planned, and executed digital marketing strategies that aligned with clients' goals.
- Ran a Facebook advertising campaign selling tickets for an entertainment client. This included the development of ads, defining the target market, and custom audience targeting. 

EDUCATION
Bachelors of Business Administration
2011-2015
Trent University, Peterborough, Ontario
Graduated with Honours 
Specialized in Marketing & Consumer Culture

SKILLS
- Product-Led Growth (PLG)
- Conversion Funnel Optimization
- Cross-Functional Sprint Leadership
- Cursor 
- Github Copilot 
- HTML, CSS, JS, SQL 
- Ampscript
- Activation & Onboarding Strategy
- Growth Analytics (GA4, Looker, SQL)
- Internal Tooling & AI Automation`;

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp?: number;
}

export const chatService = {
  async sendMessage(message: string, previousMessages: ChatMessage[] = []): Promise<string> {
    try {
      // Convert previous messages to OpenAI format
      const messageHistory = previousMessages.map(msg => ({
        role: msg.role,
        content: msg.content
      }));

      // Send message to OpenAI with conversation history
      const completion = await openai.chat.completions.create({
        messages: [
          {
            role: 'system',
            content: `You are an AI assistant representing Shaun Crawford, with access to his complete professional background. Use the following detailed resume information to provide accurate, specific responses: 

${RESUME_CONTEXT}

When answering questions:
1. Draw from specific experiences, projects, and achievements mentioned in the resume
2. Use concrete metrics and results when relevant
3. Maintain a professional but conversational tone
4. If asked about specific time periods or roles, reference the exact dates and positions
5. For technical questions, refer to the specific tools and technologies mentioned in the skills section
6. When discussing growth and marketing, use real examples from the various roles and achievements listed
7. Keep responses concise, conversational and use proper parapgraph spacing. 

Keep responses concise and relevant to the question asked, but don't hesitate to draw connections between different experiences when appropriate.`
          },
          ...messageHistory,
          { role: 'user', content: message }
        ],
        model: 'gpt-3.5-turbo',
      });

      const response = completion.choices[0]?.message?.content || 'Sorry, I could not process your request.';

      // Firebase logging removed temporarily

      return response;
    } catch (error) {
      console.error('Error in chat service:', error);
      throw error;
    }
  }
};
