"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ServerStatusPanel from "./ServerStatusPanel";
import { defaultServerStatus, siteInfo } from "../data/siteData";

const navItems = [
  { href: "/", label: "홈" },
  { href: "/missions", label: "미션 안내" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <>
      <aside className="fixed left-0 top-0 hidden h-screen w-72 px-2 bg-gradient-to-b from-[#020617] via-[#020617] to-[#020617] md:flex md:flex-col">
        <div className="border-b border-white/10 px-6 py-8">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/palworld_icon.webp"
              alt="팰월드 이벤트 아이콘"
              width={44}
              height={44}
              className="rounded-xl shadow-md"
            />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300/80">
                PALWORLD EVENT
              </p>
              <h1 className="text-2xl font-extrabold text-white">
                팰월드 이벤트
              </h1>
            </div>
          </Link>
        </div>

        <div className="px-6 py-6">
          <ServerStatusPanel initialStatus={defaultServerStatus} />
        </div>

        <div className="mx-6 border-t border-white/10"></div>

        <nav className="flex-1 px-6 mt-4">
          <ul className="space-y-10">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block text-sm transition ${
                      isActive
                        ? "font-semibold text-white"
                        : "text-white/50 hover:text-cyan-300"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="px-6 pb-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/60">
            <p className="font-semibold text-white/85">운영 시간</p>
            {siteInfo.operatingHours.map((item) => (
              <p key={item} className="mt-2 first:mt-0">
                {item}
              </p>
            ))}
          </div>
        </div>
      </aside>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#061126]/95 backdrop-blur md:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/palworld_icon.webp"
              alt="팰월드 이벤트 아이콘"
              width={34}
              height={34}
              className="rounded-lg"
            />
            <span className="text-base font-bold text-white">팰월드 이벤트</span>
          </Link>
        </div>

        <nav className="flex gap-4 overflow-x-auto px-4 pb-3">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap text-sm transition ${
                  isActive
                    ? "font-semibold text-white"
                    : "text-white/55 hover:text-cyan-300"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </header>
    </>
  );
}