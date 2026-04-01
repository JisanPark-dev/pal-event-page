import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const apiUrl = process.env.GUILDS_API_URL;

  if (!apiUrl) {
    return NextResponse.json(
      { ok: false, error: "GUILDS_API_URL이 설정되지 않았습니다." },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(apiUrl, {
      cache: "no-store",
      redirect: "follow",
      headers: {
        Accept: "application/json, text/plain, */*",
      },
    });

    const text = await response.text();

    if (!response.ok) {
      return NextResponse.json(
        {
          ok: false,
          error: `Apps Script 요청 실패 (${response.status})`,
          raw: text.slice(0, 300),
        },
        { status: 500 }
      );
    }

    try {
      const data = JSON.parse(text);
      return NextResponse.json(data, { status: 200 });
    } catch {
      return NextResponse.json(
        {
          ok: false,
          error: "Apps Script 응답이 JSON이 아닙니다.",
          raw: text.slice(0, 300),
        },
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error:
          error instanceof Error
            ? error.message
            : "Apps Script 요청 중 알 수 없는 오류가 발생했습니다.",
      },
      { status: 500 }
    );
  }
}