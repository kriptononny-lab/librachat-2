"use client";

import { useSearchParams } from "next/navigation";

export function useTheme() {
  const searchParams = useSearchParams();
  const theme = searchParams.get("theme") ?? "default";

  // Сохраняем параметр темы при навигации
  function withTheme(href: string) {
    if (theme === "default") return href;
    const sep = href.includes("?") ? "&" : "?";
    return `${href}${sep}theme=${theme}`;
  }

  const isGold = theme === "gold";

  return { theme, withTheme, isGold };
}
