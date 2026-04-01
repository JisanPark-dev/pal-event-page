import Image from "next/image";
export default function MissionsPage() {
  const bossTowers = [
    { name: "조이 & 일렉판다", point: 1 },
    { name: "릴리 & 릴린", point: 1 },
    { name: "액슬 & 전룡맨", point: 2 },
    { name: "마커스 & 호루스", point: 2 },
    { name: "빅터 & 제노그리프", point: 3 },
    { name: "사야 & 셀레문", point: 3 },
    { name: "비에른 & 빙호우거", point: 3 },
  ];

  const legendaries = [
    { name: "빙천마", point: 1 },
    { name: "제트래곤", point: 1 },
    { name: "팔라디우스", point: 1 },
    { name: "켄타나이트", point: 1 },
  ];

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#0b1d39_0%,_#041226_40%,_#020817_100%)] px-4 py-6 md:px-10 md:py-10">
      <div className="mx-auto max-w-7xl">

        <section className="overflow-hidden rounded-[28px] border border-white/10 bg-[#081427]/90 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur">
          {/* 상단 헤더 */}
          <div className="border-b border-white/10 bg-gradient-to-r from-cyan-500/10 via-blue-500/5 to-transparent px-6 py-7 md:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300/80">
              MISSION INFO
            </p>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-white md:text-5xl">
              미션 안내
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-white/60 md:text-base">
              이벤트에서 집계되는 주요 미션과 점수 기준입니다. 각 항목은 길드 단위로
              누적되며, 최초 달성 보너스와 투표 점수가 최종 순위에 반영됩니다.
            </p>
          </div>

          <div className="space-y-8 px-6 py-8 md:px-8 md:py-10">
            {/* 요약 카드 */}
            <section className="grid gap-4 md:grid-cols-4">
              <div className="rounded-2xl border border-cyan-400/15 bg-cyan-500/10 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300/80">
                  Core Mission
                </p>
                <p className="mt-3 text-2xl font-bold text-white">4개</p>
                <p className="mt-2 text-sm text-white/55">보스, 전설, 건축, 희귀 포획</p>
              </div>

              <div className="rounded-2xl border border-emerald-400/15 bg-emerald-500/10 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/80">
                  First Bonus
                </p>
                <p className="mt-3 text-2xl font-bold text-white">+1점</p>
                <p className="mt-2 text-sm text-white/55">최초 클리어 / 최초 포획 보너스</p>
              </div>

              <div className="rounded-2xl border border-amber-400/15 bg-amber-500/10 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300/80">
                  Building Vote
                </p>
                <p className="mt-3 text-2xl font-bold text-white">5점 만점</p>
                <p className="mt-2 text-sm text-white/55">1등 5점, 2등 3점, 3등 1점</p>
              </div>

              <div className="rounded-2xl border border-fuchsia-400/15 bg-fuchsia-500/10 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-fuchsia-300/80">
                  Rare Bonus
                </p>
                <p className="mt-3 text-2xl font-bold text-white">1점</p>
                <p className="mt-2 text-sm text-white/55">최초 희귀 포획 달성 보너스</p>
              </div>
            </section>

            {/* 1. 보스 탑 클리어 */}
            <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-7">
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300/75">
                    Mission 01
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-white">보스 탑 클리어</h2>
                  <p className="mt-3 text-sm text-white/55">
                    각 보스 탑 클리어 시 점수를 획득하며, 최초 클리어 길드는 추가 보너스를 받습니다.
                  </p>
                </div>

                <div className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300">
                  최초 클리어 보너스 +1점
                </div>
              </div>

              <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                {bossTowers.map((boss) => (
                  <div
                    key={boss.name}
                    className="flex items-center justify-between rounded-2xl border border-white/8 bg-[#0b1a2f] px-4 py-4"
                  >
                    <span className="text-sm font-medium text-white/85">{boss.name}</span>
                    <span className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-sm font-bold text-cyan-300">
                      {boss.point}점
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* 2. 전설 포획 */}
            <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-7">
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300/75">
                    Mission 02
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-white">전설 포획</h2>
                  <p className="mt-3 text-sm text-white/55">
                    전설 팰 포획 시 점수를 획득하며, 최초 포획 길드는 추가 보너스를 받습니다.
                  </p>
                </div>

                <div className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-300">
                  최초 포획 보너스 +1점
                </div>
              </div>

              <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                {legendaries.map((pal) => (
                  <div
                    key={pal.name}
                    className="flex items-center justify-between rounded-2xl border border-white/8 bg-[#0b1a2f] px-4 py-4"
                  >
                    <span className="text-sm font-medium text-white/85">{pal.name}</span>
                    <span className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-sm font-bold text-emerald-300">
                      {pal.point}점
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* 3 + 4 하단 2컬럼 */}
            <section className="grid gap-6 xl:grid-cols-2">
              {/* 건축점수 */}
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300/75">
                  Mission 03
                </p>
                <h2 className="mt-2 text-2xl font-bold text-white">건축 점수</h2>
                <p className="mt-3 text-sm leading-6 text-white/55">
                  각 길드의 거점 사진을 마지막 날 기준으로 투표하여 점수를 집계합니다.
                </p>

                <div className="mt-5 rounded-2xl border border-amber-400/15 bg-amber-500/10 p-4">
                  <p className="text-sm font-semibold text-amber-300">투표 규칙</p>
                  <ul className="mt-3 space-y-2 text-sm text-white/75">
                    <li>• 각 길드 별 거점 사진을 마지막 날 투표</li>
                    <li>• 자기 길드에는 투표 불가</li>
                    <li>• 운영진 투표를 합산하여 최종 점수 반영</li>
                  </ul>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/8 bg-[#0b1a2f] p-4 text-center">
                    <p className="text-sm text-white/50">3등</p>
                    <p className="mt-2 text-2xl font-extrabold text-white">1점</p>
                  </div>
                  <div className="rounded-2xl border border-white/8 bg-[#0b1a2f] p-4 text-center">
                    <p className="text-sm text-white/50">2등</p>
                    <p className="mt-2 text-2xl font-extrabold text-white">3점</p>
                  </div>
                  <div className="rounded-2xl border border-amber-400/15 bg-amber-500/10 p-4 text-center">
                    <p className="text-sm text-amber-200/80">1등</p>
                    <p className="mt-2 text-2xl font-extrabold text-amber-300">5점</p>
                  </div>
                </div>
              </div>

              {/* 최초 희귀 포획 */}
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-fuchsia-300/75">
                  Mission 04
                </p>
                <h2 className="mt-2 text-2xl font-bold text-white">최초 희귀 포획</h2>
                <p className="mt-3 text-sm leading-6 text-white/55">
                  이벤트 기간 중 희귀 팰을 최초로 포획한 길드에게 보너스 점수가 지급됩니다.
                </p>

                <div className="mt-6 flex min-h-[180px] flex-col items-center justify-center rounded-3xl border border-fuchsia-400/15 bg-fuchsia-500/10 text-center">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-fuchsia-300/80">
                    Rare Capture Bonus
                  </p>
                  <p className="mt-4 text-5xl font-extrabold text-white">+1</p>
                  <p className="mt-3 text-sm text-white/60">
                    최초 희귀 포획 달성 시 1점 지급
                  </p>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}