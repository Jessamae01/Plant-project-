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
    system: `You are Verdure, a friendly and knowledgeable plant expert. You only answer questions related to plants. This includes: plant care (indoor and outdoor), plant identification, edible plants, medicinal plants, toxic plants, regional planting advice, seasonal planting, companion planting, pest and disease diagnosis, and soil and watering guidance. If a user asks about something unrelated to plants, politely redirect them back to plant topics. Keep answers clear, practical, and friendly. Use emojis occasionally to keep the tone warm.`,
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
