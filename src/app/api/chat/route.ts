import { NextRequest, NextResponse } from "next/server";

interface DashScopeResponse {
  output: {
    text: string;
    session_id: string;
  };
  request_id: string;
  usage: {
    input_tokens: number;
    output_tokens: number;
  };
}

function generateSessionId(): string {
  return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

async function callRiemannAgent(
  message: string,
  sessionId?: string
): Promise<{ reply: string; sessionId: string }> {
  const apiKey = process.env.DASHSCOPE_API_KEY;
  const appId = process.env.RIEMANN_AGENT_ID;

  if (!apiKey || !appId) {
    throw new Error("Missing required environment variables");
  }

  const url = `https://dashscope.aliyuncs.com/api/v1/apps/${appId}/completion`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      input: {
        prompt: message,
        session_id: sessionId,
      },
      parameters: {},
      debug: {},
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`DashScope API error: ${response.status} - ${errorText}`);
  }

  const data: DashScopeResponse = await response.json();

  return {
    reply: data.output.text,
    sessionId: data.output.session_id || sessionId || generateSessionId(),
  };
}

export async function POST(req: NextRequest) {
  try {
    const { message, sessionId } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Invalid message" },
        { status: 400 }
      );
    }

    const { reply, sessionId: newSessionId } = await callRiemannAgent(message, sessionId);

    return NextResponse.json({
      reply,
      sessionId: newSessionId,
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Failed to process message" },
      { status: 500 }
    );
  }
}
