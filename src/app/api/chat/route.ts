import Anthropic from "@anthropic-ai/sdk";
import { NextRequest } from "next/server";

const client = new Anthropic();

export async function POST(req: NextRequest) {
  const { message, history } = await req.json();

  const messages = [
    ...(history || []),
    { role: "user" as const, content: message },
  ];

  const stream = await client.messages.stream({
    model: "claude-sonnet-4-20250514",
    max_tokens: 1024,
    system: `You are Verdure's plant expert AI assistant. You have deep knowledge about all types of plants including indoor houseplants, outdoor garden plants, edible plants, medicinal herbs, and plant care. Help users with:
- Plant identification and information
- Care instructions (watering, light, soil, fertilizing)
- Troubleshooting plant problems
- Plant recommendations based on their space and skill level
- Pet safety information about plants
- Regional growing advice
- Edible and medicinal plant guidance

Always be friendly, encouraging, and practical. Use plant emojis occasionally to make responses feel warm. Keep responses concise but complete.`,
    messages,
  });

  const encoder = new TextEncoder();
  const readable = new ReadableStream({
    async start(controller) {
      for await (const chunk of stream) {
        if (
          chunk.type === "content_block_delta" &&
          chunk.delta.type === "text_delta"
        ) {
          controller.enqueue(encoder.encode(chunk.delta.text));
        }
      }
      controller.close();
    },
  });

  return new Response(readable, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Transfer-Encoding": "chunked",
    },
  });
}
