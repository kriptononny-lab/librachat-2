"use client";

import { useEffect } from "react";

const THEMES: Record<string, Record<string, string>> = {
  default: {
    "--t-bg-base":    "#07070d",
    "--t-bg-surface": "#0d0d14",
    "--t-bg-card":    "#141418",
    "--t-bg-card-pop":"#160f28",
    "--t-brand":      "#7c3aed",
    "--t-brand-light":"#a78bfa",
    "--t-brand-hover":"#8b4ff5",
    "--t-brand-glow": "rgba(124,58,237,0.35)",
    "--t-brand-orb":  "rgba(124,58,237,0.14)",
    "--t-border":     "rgba(255,255,255,0.06)",
    "--t-border-pop": "rgba(124,58,237,0.3)",
    "--t-btn-text":   "#ffffff",
    "--t-gradient":   "linear-gradient(135deg,#a78bfa,#7c3aed)",
    "--t-dot":        "#a78bfa",
    "--t-dot-glow":   "rgba(167,139,250,0.7)",
  },
  gold: {
    "--t-bg-base":    "#080808",
    "--t-bg-surface": "#0f0f0f",
    "--t-bg-card":    "#191919",
    "--t-bg-card-pop":"#201c10",
    "--t-brand":      "#c9a227",
    "--t-brand-light":"#e8c84a",
    "--t-brand-hover":"#d4a82e",
    "--t-brand-glow": "rgba(201,162,39,0.25)",
    "--t-brand-orb":  "rgba(201,162,39,0.1)",
    "--t-border":     "rgba(255,255,255,0.07)",
    "--t-border-pop": "rgba(201,162,39,0.22)",
    "--t-btn-text":   "#000000",
    "--t-gradient":   "linear-gradient(135deg,#e8c84a,#c9a227)",
    "--t-dot":        "#c9a227",
    "--t-dot-glow":   "rgba(201,162,39,0.6)",
  },
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const theme = params.get("theme") ?? "default";
    const vars = THEMES[theme] ?? THEMES.default;
    const root = document.documentElement;
    Object.entries(vars).forEach(([k, v]) => root.style.setProperty(k, v));
  }, []);

  return <>{children}</>;
}
