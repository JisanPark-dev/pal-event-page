import Image from "next/image";

type MissionCard = {
  year?: string;
  title: string;
  subtitle: string;
  point: number;
  bonus?: string;
  image: string;
  accent: string;
};

export default function MissionsPage() {
  const bossTowers: MissionCard[] = [
    {
      year: "TOWER",
      title: "조이",
      subtitle: "일렉판다",
      point: 1,
      bonus: "최초 클리어 +1",
      image: "/missions/boss-zoe.webp",
      accent: "from-fuchsia-500/20 to-violet-500/10",
    },
    {
      year: "TOWER",
      title: "릴리",
      subtitle: "릴린",
      point: 1,
      bonus: "최초 클리어 +1",
      image: "/missions/boss-lily.webp",
      accent: "from-emerald-500/20 to-green-500/10",
    },
    {
      year: "TOWER",
      title: "액슬",
      subtitle: "전룡맨",
      point: 2,
      bonus: "최초 클리어 +1",
      image: "/missions/boss-axel.webp",
      accent: "from-yellow-500/20 to-amber-500/10",
    },
    {
      year: "TOWER",
      title: "마커스",
      subtitle: "호루스",
      point: 2,
      bonus: "최초 클리어 +1",
      image: "/missions/boss-marcus.webp",
      accent: "from-orange-500/20 to-red-500/10",
    },
    {
      year: "TOWER",
      title: "빅터",
      subtitle: "제노그리프",
      point: 3,
      bonus: "최초 클리어 +1",
      image: "/missions/boss-victor.webp",
      accent: "from-cyan-500/20 to-blue-500/10",
    },
    {
      year: "TOWER",
      title: "사야",
      subtitle: "셀레문",
      point: 3,
      bonus: "최초 클리어 +1",
      image: "/missions/boss-saya.webp",
      accent: "from-purple-500/20 to-pink-500/10",
    },
    {
      year: "TOWER",
      title: "비에른",
      subtitle: "빙호우거",
      point: 3,
      bonus: "최초 클리어 +1",
      image: "/missions/boss-bjorn.webp",
      accent: "from-sky-500/20 to-cyan-500/10",
    },
  ];

  const legends: MissionCard[] = [
    {
      year: "LEGEND",
      title: "빙천마",
      subtitle: "Frostallion",
      point: 1,
      bonus: "최초 포획 +1",
      image: "/missions/legend-frostallion.webp",
      accent: "from-sky-500/20 to-indigo-500/10",
    },
    {
      year: "LEGEND",
      title: "제트래곤",
      subtitle: "Jetragon",
      point: 1,
      bonus: "최초 포획 +1",
      image: "/missions/legend-jetragon.webp",
      accent: "from-red-500/20 to-pink-500/10",
    },
    {
      year: "LEGEND",
      title: "팔라디우스",
      subtitle: "Paladius",
      point: 1,
      bonus: "최초 포획 +1",
      image: "/missions/legend-paladius.webp",
      accent: "from-yellow-500/20 to-amber-500/10",
    },
    {
      year: "LEGEND",
      title: "켄타나이트",
      subtitle: "Necromus",
      point: 1,
      bonus: "최초 포획 +1",
      image: "/missions/legend-necromus.webp",
      accent: "from-violet-500/20 to-fuchsia-500/10",
    },
  ];

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#0b1d39_0%,_#041226_45%,_#020817_100%)] px-4 py-6 md:px-10 md:py-10">
      <div className="mx-auto max-w-7xl">
        {/* 상단 배너 */}
        <section className="mb-8 overflow-hidden rounded-[32px] border border-white/10 bg-[#081427]/90">
          <div className="relative h-[220px] md:h-[200px]">
            <Image
              src="/missions/mission-banner.avif"
              alt="팰월드 미션 배너"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#020817]/90 via-[#020817]/65 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 top-0 flex items-center px-6 md:px-10">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300/85">
                  MISSION BOARD 2026
                </p>
                <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-white md:text-6xl">
                  미션 안내
                </h1>
                <p className="mt-4 max-w-3xl text-sm leading-6 text-white/70 md:text-base">
                  보스 탑 클리어, 전설 포획, 건축 점수, 최초 희귀 포획까지 길드 단위 누적 점수로 최종 순위를 결정합니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 요약 바 */}
        <section className="mb-8 grid gap-4 md:grid-cols-4">
          <div className="rounded-2xl border border-cyan-400/15 bg-cyan-500/10 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300/80">
              Boss Towers
            </p>
            <p className="mt-3 text-2xl font-bold text-white">7개</p>
            <p className="mt-2 text-sm text-white/55">1~3점 + 최초 클리어 보너스</p>
          </div>

          <div className="rounded-2xl border border-emerald-400/15 bg-emerald-500/10 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/80">
              Legends
            </p>
            <p className="mt-3 text-2xl font-bold text-white">4개</p>
            <p className="mt-2 text-sm text-white/55">각 1점 + 최초 포획 보너스</p>
          </div>

          <div className="rounded-2xl border border-amber-400/15 bg-amber-500/10 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300/80">
              Building Vote
            </p>
            <p className="mt-3 text-2xl font-bold text-white">5 / 3 / 1</p>
            <p className="mt-2 text-sm text-white/55">1등 5점 · 2등 3점 · 3등 1점</p>
          </div>

          <div className="rounded-2xl border border-fuchsia-400/15 bg-fuchsia-500/10 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-fuchsia-300/80">
              Rare Capture
            </p>
            <p className="mt-3 text-2xl font-bold text-white">+1점</p>
            <p className="mt-2 text-sm text-white/55">최초 희귀 포획 길드 보너스</p>
          </div>
        </section>

        {/* 보스 탑 */}
        <section className="mb-8 overflow-hidden rounded-[28px] border border-white/10 bg-[#081427]/90 p-6 md:p-8">
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300/80">
                MISSION 01
              </p>
              <h2 className="mt-2 text-3xl font-extrabold text-white">보스 탑 클리어</h2>
              <p className="mt-3 text-sm text-white/60 md:text-base">
                각 보스 탑 클리어 시 점수를 획득하며, 최초 클리어 길드는 추가 보너스 점수를 받습니다.
              </p>
            </div>

            <div className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300">
              최초 클리어 보너스 +1점
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {bossTowers.map((boss) => (
              <article
                key={`${boss.title}-${boss.subtitle}`}
                className={`overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b ${boss.accent} shadow-[0_10px_30px_rgba(0,0,0,0.25)]`}
              >
                <div className="relative h-[200px] w-full bg-[#091728]">
                  <Image
                    src={boss.image}
                    alt={`${boss.title} ${boss.subtitle}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081427] via-[#081427]/20 to-transparent" />

                  <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80 backdrop-blur">
                    {boss.year}
                  </div>

                  <div className="absolute right-4 top-4 rounded-full border border-cyan-400/20 bg-cyan-500/15 px-3 py-1 text-sm font-bold text-cyan-300">
                    {boss.point}점
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-3xl font-extrabold leading-none text-white">
                      {boss.title}
                    </p>
                    <p className="mt-1 text-lg font-bold uppercase tracking-wide text-white/85">
                      {boss.subtitle}
                    </p>
                  </div>
                </div>

                <div className="border-t border-white/10 bg-[#0b1628] px-4 py-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-white/60">클리어 점수</p>
                    <p className="text-base font-bold text-white">{boss.point}점</p>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <p className="text-sm text-white/60">보너스</p>
                    <p className="text-sm font-semibold text-cyan-300">{boss.bonus}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 전설 포획 */}
        <section className="mb-8 overflow-hidden rounded-[28px] border border-white/10 bg-[#081427]/90 p-6 md:p-8">
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300/80">
                MISSION 02
              </p>
              <h2 className="mt-2 text-3xl font-extrabold text-white">전설 포획</h2>
              <p className="mt-3 text-sm text-white/60 md:text-base">
                전설 팰 포획 시 점수를 획득하며, 최초 포획 길드는 추가 보너스 점수를 받습니다.
              </p>
            </div>

            <div className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-300">
              최초 포획 보너스 +1점
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {legends.map((legend) => (
              <article
                key={`${legend.title}-${legend.subtitle}`}
                className={`overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b ${legend.accent} shadow-[0_10px_30px_rgba(0,0,0,0.25)]`}
              >
                <div className="relative h-[220px] w-full bg-[#091728]">
                  <Image
                    src={legend.image}
                    alt={`${legend.title} ${legend.subtitle}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081427] via-[#081427]/20 to-transparent" />

                  <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80 backdrop-blur">
                    {legend.year}
                  </div>

                  <div className="absolute right-4 top-4 rounded-full border border-emerald-400/20 bg-emerald-500/15 px-3 py-1 text-sm font-bold text-emerald-300">
                    {legend.point}점
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-2xl font-extrabold leading-none text-white">
                      {legend.title}
                    </p>
                    <p className="mt-1 text-base font-bold uppercase tracking-wide text-white/80">
                      {legend.subtitle}
                    </p>
                  </div>
                </div>

                <div className="border-t border-white/10 bg-[#0b1628] px-4 py-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-white/60">포획 점수</p>
                    <p className="text-base font-bold text-white">{legend.point}점</p>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <p className="text-sm text-white/60">보너스</p>
                    <p className="text-sm font-semibold text-emerald-300">{legend.bonus}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 하단 2개 */}
        <section className="grid gap-6 xl:grid-cols-2">
          <section className="rounded-[28px] border border-white/10 bg-[#081427]/90 p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300/80">
              MISSION 03
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-white">건축 점수</h2>
            <p className="mt-3 text-sm leading-6 text-white/60">
              각 길드의 거점 사진을 마지막 날 투표하여 점수를 집계합니다.
              자기 길드에는 투표할 수 없으며, 운영진 투표를 합산해 최종 순위를 결정합니다.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center">
                <p className="text-sm text-white/50">3등</p>
                <p className="mt-2 text-3xl font-extrabold text-white">1점</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center">
                <p className="text-sm text-white/50">2등</p>
                <p className="mt-2 text-3xl font-extrabold text-white">3점</p>
              </div>
              <div className="rounded-2xl border border-amber-400/20 bg-amber-500/10 p-5 text-center">
                <p className="text-sm text-amber-200/80">1등</p>
                <p className="mt-2 text-3xl font-extrabold text-amber-300">5점</p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-amber-400/15 bg-amber-500/10 p-4">
              <p className="text-sm font-semibold text-amber-300">투표 규칙</p>
              <ul className="mt-3 space-y-2 text-sm text-white/75">
                <li>• 마지막 날 각 길드 거점 사진 기준 투표</li>
                <li>• 자기 길드 투표 불가</li>
                <li>• 운영진 투표 합산 반영</li>
              </ul>
            </div>
          </section>

          <section className="rounded-[28px] border border-white/10 bg-[#081427]/90 p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-fuchsia-300/80">
              MISSION 04
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-white">최초 희귀 포획</h2>
            <p className="mt-3 text-sm leading-6 text-white/60">
              이벤트 기간 중 희귀 팰을 최초로 포획한 길드에게 보너스 점수가 지급됩니다.
            </p>

            <div className="mt-6 flex min-h-[260px] flex-col items-center justify-center rounded-3xl border border-fuchsia-400/15 bg-fuchsia-500/10 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-fuchsia-300/80">
                Rare Capture Bonus
              </p>
              <p className="mt-4 text-6xl font-extrabold text-white">+1</p>
              <p className="mt-3 text-sm text-white/60">
                최초 희귀 포획 달성 시 1점 지급
              </p>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}