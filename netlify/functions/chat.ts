import { Handler } from '@netlify/functions';
import OpenAI from 'openai';

const RESUME_CONTEXT = `I am Shaun Crawford, a Growth-focused marketing leader with a track record of designing and executing high-impact PLG experiments, onboarding experiences, and funnel optimizations. I have a proven track record of leading cross-functional sprints with engineering, product, and design teams.`;

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
                   Answer questions about my experience, skills, and achievements in a professional but conversational tone. 
                   Keep responses concise and focused on my professional experience.`
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
