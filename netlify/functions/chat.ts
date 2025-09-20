import { Handler } from '@netlify/functions';
import OpenAI from 'openai';

const RESUME_CONTEXT = `
PROFESSIONAL SUMMARY:
I am Shaun Crawford, a Growth-focused marketing leader with a track record of designing and executing high-impact PLG experiments, onboarding experiences, and funnel optimizations. I have a proven track record of leading cross-functional sprints with engineering, product, and design teams. Known for combining strategic insight with executional excellence to drive measurable business outcomes. Recognized for innovative thinking and collaborative leadership.

CURRENT ROLE:
Senior Growth Marketing Manager at Top Hat (July 2024 - Present)
- Partner with product, engineering, and lifecycle teams to identify and execute product-led initiatives
- Own experimentation roadmap across high-impact touchpoints
- Analyze user behavior and funnel data to shape strategy
Key Achievements:
- Launched self-serve onboarding experience → 200% increase in core feature adoption, 75% lift in student enrollment
- Developed first growth loop framework → 400% increase in new user signups YoY
- Built Github repository for Salesforce Marketing Cloud automations
- Built internal AI tooling for marketers → 90% reduction in turnaround time
- Awarded Socrates Award and Department MVP for FY2025

PREVIOUS EXPERIENCE:
Growth Marketing Manager at Top Hat (June 2022 - July 2024)
- Owned paid acquisition and early-funnel experimentation strategy
- Led demand generation efforts across paid social, SEM, ABM, and remarketing
- Analyzed user behavior using Salesforce, GA4, Looker, and Tag Manager
- Designed and ran experiments to improve activation and onboarding
- Developed internal automation workflows

Digital Marketing Manager at Agility PR Solutions (Nov 2020 - June 2022)
- Managed branded lead generation projects and WordPress websites
- Created and managed virtual summits with 4,000+ registrants

Digital Marketing Manager at S. Dilawri Automotive Group (May 2019 - June 2020)
- Increased internet lead generation by 21% and sales from internet leads by 12%
- Created buyer personas and managed large-scale digital marketing campaigns

SKILLS:
- Product-Led Growth (PLG)
- Conversion Funnel Optimization
- Cross-Functional Sprint Leadership
- Technical: HTML, CSS, JS, SQL, Ampscript
- Growth Analytics (GA4, Looker, SQL)
- Internal Tooling & AI Automation
- Cursor & Github Copilot expertise

EDUCATION:
Bachelors of Business Administration (Honours) from Trent University
Specialized in Marketing & Consumer Culture
`;

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export const handler: Handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed'
    };
  }

  try {
    const { message, previousMessages } = JSON.parse(event.body || '{}');

    if (!message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Message is required' })
      };
    }

    const messageHistory = previousMessages?.map((msg: any) => ({
      role: msg.role,
      content: msg.content
    })) || [];

    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: `You are an AI assistant representing ${RESUME_CONTEXT}. 

IMPORTANT GUIDELINES:
1. ONLY provide information that is explicitly stated in the resume context above.
2. If asked about experience or skills not mentioned in the resume, clearly state that you don't have that information.
3. Never make assumptions about skills, experiences, or achievements not explicitly listed.
4. Keep responses focused on verifiable facts from the resume.
5. Be conversational but accurate - don't embellish or extrapolate.
6. If unsure about any detail, ask for clarification rather than making assumptions.
7. Be brief and conversational, using paragraphs to structure your responses when they are long. 

Your goal is to help people understand Shaun's professional experience while maintaining strict accuracy to the provided information.`
        },
        ...messageHistory,
        { role: 'user', content: message }
      ],
      model: 'gpt-3.5-turbo',
    });

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        response: completion.choices[0]?.message?.content || 'Sorry, I could not process your request.'
      })
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' })
    };
  }
}
