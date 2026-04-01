export type ServerStatus = "ON" | "OFF";

export const siteInfo = {
  eventEnglishTitle: "PALWORLD EVENT",
  eventTitle: "밥그릇 탄산배 팰월드 이벤트",
  eventDescription:
    "공지사항, 팀 정보, 점수 현황을 한눈에 확인할 수 있는 이벤트 페이지입니다.",
  notice:
    "이벤트 기간: 2026/03/27 ~ 2026/04/11 · 팀별 점수 경쟁을 통해 최종 순위를 결정합니다.",
  operatingHours: [
    "평일 20:00 ~ 02:00",
    "토요일 14:00 ~ 02:00",
    "4월 5일 일요일 24시간",
  ],
};

export const defaultServerStatus: ServerStatus = "ON";

export const rankingData = [
  { team: "1팀", score: 85, members: "탄산, 완지, 한우, 갈매기" },
  { team: "2팀", score: 77, members: "하리보, 서연, 렉스, 오구" },
  { team: "3팀", score: 70, members: "못함이, 빙빙, 흐에흐에흐에, 형주" },
  { team: "4팀", score: 60, members: "오라버, 릿울, 너구리" },
  { team: "5팀", score: 50, members: "가, 나, 다" },
];

export const missionGroups = {
  main: [
    "보스 탑 클리어",
    "전설 포획",
    "도감 점수",
    "건축 점수",
    "최초 희귀 포획",
  ],
  bonus: [
    "팰 레이싱",
    "맨몸 전투",
    "가장 높게 탑쌓기"
  ],
};