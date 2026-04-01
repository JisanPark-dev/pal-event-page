import { rankingData, siteInfo } from "../data/siteData";

function getRankBadge(index: number) {
  if (index === 0) return "🥇";
  if (index === 1) return "🥈";
  if (index === 2) return "🥉";
  return `${index + 1}`;
}

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
            <h2 className="text-2xl font-bold text-white md:text-3xl">팀별 점수 현황</h2>
            <p className="mt-2 text-sm text-white/55">
              상위 3팀은 메달로 표시되며, 이후 팀은 일반 순위로 정렬됩니다.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10">
            <table className="w-full text-left">
              <thead className="bg-white/8 text-sm text-white/60">
                <tr>
                  <th className="px-5 py-4">순위</th>
                  <th className="px-5 py-4">팀명</th>
                  <th className="px-5 py-4">팀원</th>
                  <th className="px-5 py-4 text-right">총점</th>
                </tr>
              </thead>
              <tbody>
                {rankingData.map((item, index) => (
                  <tr
                    key={item.team}
                    className="border-t border-white/10 transition hover:bg-white/[0.03]"
                  >
                    <td className="px-5 py-5 text-lg font-bold text-white">
                      {getRankBadge(index)}
                    </td>
                    <td className="px-5 py-5 font-semibold text-white">{item.team}</td>
                    <td className="px-5 py-5 text-white/65">{item.members}</td>
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
                        {item.score}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}