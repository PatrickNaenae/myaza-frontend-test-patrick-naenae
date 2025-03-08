import { streamText } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { initialMessage } from "@/lib/data";
import { Message } from "@/lib/types";

const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_API_KEY || "",
});

const generateId = () => Math.random().toString(36).slice(2, 15);

const buildGoogleGenAIPrompt = (messages: Message[]): Message[] => [
  {
    id: generateId(),
    role: "user",
    content: initialMessage.content,
  },
  ...messages.map((message) => ({
    id: message.id || generateId(),
    role: message.role,
    content: message.content,
  })),
];

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    if (!process.env.GOOGLE_API_KEY) {
      throw new Error("Google API key is missing.");
    }

    const stream = await streamText({
      model: google("gemini-1.5-pro"),
      messages: buildGoogleGenAIPrompt(messages),
      temperature: 0.7,
    });

    if (!stream) {
      throw new Error("Failed to create a stream.");
    }

    return stream.toDataStreamResponse();
  } catch (error) {
    console.error("Error in POST function:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
