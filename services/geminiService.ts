import { GoogleGenAI } from "@google/genai";
import { 
  CONFERENCE_NAME, 
  CONFERENCE_DATE, 
  CONFERENCE_LOCATION, 
  IMPORTANT_DATES, 
  REGISTRATION_FEES, 
  CONTACT_EMAIL,
  ORGANIZERS 
} from '../constants';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are the official AI Assistant for the ${CONFERENCE_NAME}.
Your goal is to help potential attendees, researchers, and students with information about the conference.

Here is the conference data you have access to:
- Name: ${CONFERENCE_NAME}
- Date: ${CONFERENCE_DATE}
- Location: ${CONFERENCE_LOCATION}
- Organizer: Faculty of Mathematical Sciences, University of Jammu.
- Convener/Organizing Chair: ${ORGANIZERS.find(o => o.role?.includes('Chair'))?.name}
- Contact Email: ${CONTACT_EMAIL}

Important Dates:
${IMPORTANT_DATES.map(d => `- ${d.label}: ${d.date}`).join('\n')}

Registration Fees:
${REGISTRATION_FEES.map(f => `- ${f.category}: ${f.amount}`).join('\n')}

Topics include:
1. Mathematical Modeling
2. AI and Data Science
3. Algebra and Analysis
4. Cyber Security
5. Cryptography and Information Security
6. Computational Intelligence and Machine Learning
7. Climate Modelling and Environmental Mathematics
8. Statistics and Related Topics
9. Soft Computing
10. Approximation and Operator theory
11. Operations Research
12. Statistics and Data Science
13. Biostatistics
14. Natural Language Processing
15. IOT

Guidelines:
1. Be professional, academic, and helpful.
2. If asked about the fee, provide the specific amount for the category asked (e.g., student vs faculty).
3. If asked about submission, mention the abstract deadline is Jan 15, 2026.
4. Keep answers concise (under 100 words).
5. Mention the new 5-Year Integrated UG-PG Programme in Mathematical Sciences if asked about new initiatives.
`;

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const modelId = 'gemini-3-flash-preview'; 
    const response = await ai.models.generateContent({
      model: modelId,
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    return response.text || "I apologize, I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently unable to access the conference database. Please try again later.";
  }
};