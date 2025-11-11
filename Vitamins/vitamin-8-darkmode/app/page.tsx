"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Home() {
  const pathname = usePathname();

  const containerClass = clsx("container", {
    "dark-mode": pathname === "/dark-mode",
  });

  return (
    <div className={containerClass}>
      <h1>Welcome to {pathname === "/dark-mode" ? "Dark" : "Light"} Mode!</h1>

      <div style={{ marginTop: "20px" }}>
        <Link href="/dark-mode">
          <button>Dark Mode</button>
        </Link>
        <Link href="/light-mode" style={{ marginLeft: "10px" }}>
          <button>Light Mode</button>
        </Link>
      </div>

      <p style={{ marginTop: "20px" }}>Current Path: {pathname}</p>
    </div>
  );
}
