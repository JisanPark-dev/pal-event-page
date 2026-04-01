"use client";

import { useEffect, useState } from "react";
import type { ServerStatus } from "../data/siteData";

type Props = {
  initialStatus: ServerStatus;
};

const STORAGE_KEY = "palworld-server-status";

export default function ServerStatusPanel({ initialStatus }: Props) {
  const [status, setStatus] = useState<ServerStatus>(initialStatus);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY) as ServerStatus | null;
    if (saved === "ON" || saved === "OFF") {
      setStatus(saved);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, status);
  }, [status]);

  const isOn = status === "ON";

  return (
    <div className="px-2 py-2">

      {/* 상태 텍스트 */}
      <p className="text-sm text-white/80">
        {isOn ? "현재 서버 운영 중" : "현재 서버 닫힘"}
      </p>

      {/* 버튼 */}
      <div className="mt-3 flex gap-2">
        <button
          type="button"
          onClick={() => setStatus("ON")}
          className={`rounded-lg px-3 py-2 text-xs font-semibold transition ${
            isOn
              ? "bg-emerald-500/20 text-emerald-300"
              : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
          }`}
        >
          ON
        </button>

        <button
          type="button"
          onClick={() => setStatus("OFF")}
          className={`rounded-lg px-3 py-2 text-xs font-semibold transition ${
            !isOn
              ? "bg-red-500/20 text-red-300"
              : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
          }`}
        >
          OFF
        </button>
      </div>

    </div>
  );
}