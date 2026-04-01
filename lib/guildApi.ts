export type GuildRow = {
  guildName: string;
  members: string;
  score: number;
};

type GuildApiResponse = {
  ok: boolean;
  updatedAt?: string;
  guilds?: GuildRow[];
  error?: string;
};

export async function getGuildsFromSheet(): Promise<GuildRow[]> {
  const apiUrl = process.env.NEXT_PUBLIC_GUILDS_API_URL;

  if (!apiUrl) {
    throw new Error("NEXT_PUBLIC_GUILDS_API_URL이 설정되지 않았습니다.");
  }

  const response = await fetch(apiUrl, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error(`길드 데이터를 불러오지 못했습니다. (${response.status})`);
  }

  const data = (await response.json()) as GuildApiResponse;

  if (!data.ok) {
    throw new Error(data.error || "Apps Script API 응답이 올바르지 않습니다.");
  }

  return data.guilds ?? [];
}