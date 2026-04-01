import type { ServerStatus } from "../data/siteData";

type Props = {
  initialStatus: ServerStatus;
};

export default function ServerStatusPanel({ initialStatus }: Props) {
  const isOn = initialStatus == "ON";

  return (
    <div className="px-2 py-2">
      {/* 상태 텍스트 */}
      <p
        className={`text-sm font-semibold ${
          isOn ? "text-emerald-400" : "text-red-400"
        }`}
      >
        {isOn ? "현재 서버 운영 중" : "현재 서버 닫힘"}
      </p>

      {/* 상태 배지 */}
      <div className="mt-3">
        <span
          className={`inline-flex rounded-lg px-3 py-2 text-xs font-semibold transition ${
            isOn
              ? "bg-emerald-500/20 text-emerald-300"
              : "bg-red-500/20 text-red-300"
          }`}
        >
          {initialStatus}
        </span>
      </div>
    </div>
  );
}