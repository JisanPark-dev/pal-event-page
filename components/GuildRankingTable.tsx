"use client";

import { useEffect, useState } from "react";

type GuildRow = {
  guildName: string;
  members: string;
  score: number;
};

type GuildApiResponse = {
  ok: boolean;
  updatedAt?: string;
  guilds?: GuildRow[];
  error?: string;
  raw?: string;
};

function getRankBadge(index: number) {
  if (index === 0) return "🥇";
  if (index === 1) return "🥈";
  if (index === 2) return "🥉";
  return `${index + 1}`;
}

export default function GuildRankingTable() {
  const [guilds, setGuilds] = useState<GuildRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  useEffect(() => {
    const fetchGuilds = async () => {
      try {
        const response = await fetch("/api/guilds", {
          cache: "no-store",
        });

        const data = (await response.json()) as GuildApiResponse;

        if (!response.ok || !data.ok) {
          throw new Error(data.error || "길드 데이터를 불러오지 못했습니다.");
        }

        setGuilds(data.guilds ?? []);
      } catch (error) {
        setLoadError(
          error instanceof Error
            ? error.message
            : "길드 데이터를 불러오는 중 오류가 발생했습니다."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchGuilds();
  }, []);

  if (loading) {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-10 text-center text-white/60">
        길드 데이터를 불러오는 중...
      </div>
    );
  }

  if (loadError) {
    return (
      <div className="rounded-2xl border border-red-400/20 bg-red-500/10 px-5 py-4 text-sm text-red-200">
        길드 데이터를 불러오지 못했습니다: {loadError}
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10">
      <table className="w-full text-left">
        <thead className="bg-white/8 text-sm text-white/60">
          <tr>
            <th className="px-5 py-4">순위</th>
            <th className="px-5 py-4">길드명</th>
            <th className="px-5 py-4">소속원</th>
            <th className="px-5 py-4 text-right">점수</th>
          </tr>
        </thead>
        <tbody>
          {guilds.map((guild, index) => (
            <tr
              key={guild.guildName}
              className="border-t border-white/10 transition hover:bg-white/[0.03]"
            >
              <td className="px-5 py-5 text-lg font-bold text-white">
                {getRankBadge(index)}
              </td>
              <td className="px-5 py-5 font-semibold text-white">
                {guild.guildName}
              </td>
              <td className="px-5 py-5 text-white/65">
                {guild.members}
              </td>
              <td className="px-5 py-5 text-right text-lg font-extrabold">
                <span
                  className={
                    index === 0
                      ? "text-yellow-400"
                      : index === 1
                      ? "text-slate-300"
                      : index === 2
                      ? "text-orange-400"
                      : "text-white"
                  }
                >
                  {guild.score}
                </span>
              </td>
            </tr>
          ))}

          {guilds.length === 0 && (
            <tr>
              <td colSpan={4} className="px-5 py-10 text-center text-white/50">
                아직 표시할 길드 데이터가 없습니다.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}