import GuildRankingTable from "../components/GuildRankingTable";
import { siteInfo } from "../data/siteData";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#020817] via-[#041226] to-[#020817] px-4 py-6 md:px-10 md:py-10">
      <div className="mx-auto max-w-7xl">
        <section className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300/80">
            {siteInfo.eventEnglishTitle}
          </p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-white md:text-5xl">
            {siteInfo.eventTitle}
          </h1>
          <p className="mt-3 text-white/65">{siteInfo.eventDescription}</p>
        </section>

        <section className="mb-8 rounded-2xl border border-white/10 bg-gradient-to-r from-[#1a1f3a] to-[#0b1f3a] px-5 py-4">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-500/15 text-xl">
              📢
            </div>
            <div>
              <p className="text-sm font-semibold text-cyan-300">공지사항</p>
              <p className="mt-1 text-white/85">{siteInfo.notice}</p>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-[#0a1628] p-5 md:p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-white md:text-3xl">길드 순위표</h2>
            <p className="mt-2 text-sm text-white/55">
              Google Sheet의 Guilds 시트를 기준으로 자동 갱신됩니다.
            </p>
          </div>

          <GuildRankingTable />
        </section>
      </div>
    </main>
  );
}